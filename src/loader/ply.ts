type Option<T> = T | undefined;
type UserDefinedElementType = string;
type ElementType = "vertex" | "face" | "edge" | UserDefinedElementType;
type PrimitivePropertyType = "char" | "uchar" | "short" | "ushort" |
                             "int" | "uint" | "float" | "double";
interface PropertyTypeList {
  length: PrimitivePropertyType,
  type: PrimitivePropertyType
};
type PropertyType = PrimitivePropertyType | PropertyTypeList;
type PropertyName = string;
interface Property {
  type: PropertyType,
  name: PropertyName
};
interface Element {
  type: ElementType,
  length: number,
  properties: Property[],
}
type FormatType = "ascii" | "binary_little_endian" | "binary_big_endian";
type FormatVersion = string;
type Format = [FormatType, FormatVersion];
interface Header {
  format: Option<Format>,
  elements: Element[]
}
const validatePrimitivePropertyType = (type: string): boolean => {
  switch (type) {
    case "char":
    case "uchar":
    case "short":
    case "ushort":
    case "int":
    case "uint":
    case "float":
    case "double":
      return true;
    default:
      return false;
  }
}
const getPrimitivePropertyType = (type: string): PrimitivePropertyType => {
  if (validatePrimitivePropertyType(type)) {
    return type as PrimitivePropertyType;
  }
  throw new Error();
}
const validatePropertyTypeList = (type: string, rest: string[]): boolean => {
  if (type !== "list")
    return false;
  if (rest.length !== 2)
    return false;
  return validatePrimitivePropertyType(rest[0]) && validatePrimitivePropertyType(rest[1]);
}
const getPropertyType = (list: string[]): PropertyType => {
  const [type, ...rest] = list;
  if (validatePrimitivePropertyType(type))
    return type as PrimitivePropertyType;
  if (validatePropertyTypeList(type, rest))
    return {
      length: getPrimitivePropertyType(rest[0]),
      type: getPrimitivePropertyType(rest[1])
    };
  throw new Error();
}
const parseHeader = (text: string) => {
  const header: Header = {
    format: undefined,
    elements: [],
  };
  const [ply, format, ...lines] = text.split(/\s*\n\s*/);
  if (ply !== "ply") {
    throw new Error(ply);
  }
  {
    const [f, type, version] = format.split(/\s+/);
    if (f !== "format")
      throw new Error(f);
    switch (type) {
      case "ascii":
      case "binary_little_endian":
      case "binary_big_endian":
        header.format = [type, version];
        break;
      default:
        throw new Error(type);
    }
  }
  let currentElementIndex = -1;
  for (const line of lines) {
    const [type, ...rest] = line.split(/\s+/);
    switch (type) {
      case "comment":
        continue;
      case "element": {
        const type = rest[0];
        const length = parseInt(rest[1]);
        switch (type) {
          case "vertex":
          case "face":
          case "edge":
            break;
          default:
            throw new Error("Unimplemented Feature: User-Defined Elements");
        }
        currentElementIndex = header.elements.push({
          type,
          length,
          properties: []
        }) - 1;
        break;
      }
      case "property": {
        if (currentElementIndex === -1)
          throw new Error();
        const element = header.elements[currentElementIndex];
        const name = rest.pop()!;
        const type = getPropertyType(rest);
        header.elements[currentElementIndex].properties.push({
          type,
          name
        });
        break;
      }
      default:
        throw new Error();
    }
  }
  return header;
}
const parseData = (header: Header, data: string) => {
  const lines = data.split(/\s*\n\s*/);
  const lengths = header.elements
    .map(element => element.length)
    .reduce((a, b, i) => {
      a.push(a[i] + b);
      return a;
    }, [0]).slice(1);
  let j = 0;
  const vertices = [];
  const faces = [];
  for (const [i, line] of lines.entries()) {
    if (lengths[j] <= i)
      j += 1;
    const element = header.elements[j];
    const getProperties = (data: number[]) => {
      const o: { [index: string]: number | number[] } = {};
      for (let [i, property] of element.properties.entries()) {
        if (typeof property.type === "object") {
          const [length, ...rest] = data;
          o[property.name] = rest;
        } else {
          o[property.name] = data[i];
        }
      }
      return o;
    }
    const raw = line.split(/\s+/).map(parseFloat);
    switch (element.type) {
      case "vertex": {
        const vertex = getProperties(raw);
        vertices.push(vertex);
        break;
      }
      case "face": {
        const face = getProperties(raw);
        faces.push(face);
        break;
      }
    }
  }
  return {
    vertices,
    faces
  };
}
export type Ply = {
  vertices: { [index: string]: number | number[] }[],
  faces: { [index: string]: number | number[] }[],
}
export const parser = (text: string): Ply => {
  const [h, d] = text.trim().split(/\s*end_header\s*/);
  const header = parseHeader(h);
  const data = parseData(header, d);
  return data;
}