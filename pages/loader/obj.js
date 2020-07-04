export const newObj = () => ({
  o: [],
  v: [],
  vt: [],
  vn: [],
  vp: [],
  f: [],
})
export const parser = async (text) => {
  const obj = newObj();
  for (const line of text.trim().split(/\n/)) {
    const l = line.trim();
    if (l[0] === "#") continue;
    const [type, ...rest] = l.split(" ");
    switch (type) {
      case "o": {
        const [name] = rest;
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
            if (typeof index === "undefined") return index;
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
          console.error(`unimplemented: "${l}"`);
        break;
      }
      default:
        throw new Error("unknown format");
    }
  }
  return obj;
}