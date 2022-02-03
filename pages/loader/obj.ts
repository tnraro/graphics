type xyzw = { x: number, y: number, z: number, w: number };
type xyz = { x: number, y: number, z: number };
type uvw = { u: number, v: number, w: number };
type vtn = { v: number | undefined, t: number | undefined, n: number | undefined };
type face = vtn[];
export interface Obj {
  o: string[],
  v: xyzw[],
  vt: uvw[],
  vn: xyz[],
  vp: { u: number, v: number, w: number }[],
  f: face[],
}
export const newObj = (): Obj => ({
  o: [],
  v: [],
  vt: [],
  vn: [],
  vp: [],
  f: [],
})
export const parser = (text: string): Obj => {
  const obj = newObj();
  for (const line of text.trim().split(/\s*\n\s*/)) {
    if (line[0] === "#") continue;
    const [type, ...rest] = line.split(/\s+/);
    switch (type) {
      case "o": {
        const name = rest.join(" ");
        obj.o.push(name);
        break;
      }
      case "v": {
        const [x, y, z, w = 1] = rest.map(parseFloat);
        obj.v.push({x, y, z, w});
        break;
      }
      case "vt": {
        const [u, v = 0, w = 0] = rest.map(parseFloat);
        obj.vt.push({u, v, w});
        break;
      }
      case "vn": {
        const [x, y, z] = rest.map(parseFloat);
        obj.vn.push({x, y, z});
        break;
      }
      case "vp": {
        const [u, v, w] = rest.map(parseFloat);
        obj.vp.push({u, v, w});
        break;
      }
      case "f": {
        const face = rest.map(indices => {
          const [v, t, n] = indices.split('/').map(index => {
            if (index === "") return undefined;
            return parseFloat(index) - 1;
          });
          return {v, t, n};
        });
        obj.f.push(face);
        break;
      }
      case "mtllib":
      case "usemtl":
      case "s":
      case "g":
      case "l": {
        if (process.env.NODE_ENV === "development")
          console.error(`unimplemented: "${line}"`);
        break;
      }
      default:
        throw new Error("unknown format");
    }
  }
  return obj;
}