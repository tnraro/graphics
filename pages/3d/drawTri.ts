import {
  float2, float3, float4,
  sub,
  cross,
  dot,
  float,
} from "./mathematics";

const getBarycentric = (p: float2, p0: float2, p1: float2, p2: float2): float3 => {
  const t = sub(p1, p0);
  const area = cross(t, sub(p0, p2));
  const a0 = cross(sub(p, p0), t) / area;
  const a1 = cross(sub(p, p1), sub(p2, p1)) / area;
  const a2 = 1 - a0 - a1;

  return [a1, a2, a0];
}
const getPixelFromTexture = (texture, u: float, v: float): float4 => {
  const { width, height, data } = texture.data;
  const x = Math.round(u * width);
  const y = Math.round(v * height);
  const index = (y * width + x) * 4;
  const r = data[index + 0];
  const g = data[index + 1];
  const b = data[index + 2];
  const a = data[index + 3];
  return [ r, g, b, a ];
}
export const drawTri = (props) => {
  const { framebuffer, width, v0, v1, v2, textures } = props;

  // TODO: idk what to do

  const hasUV =
    typeof v0.t !== "undefined" &&
    typeof v1.t !== "undefined" &&
    typeof v2.t !== "undefined";

  const p0 = float2(v0.v);
  const p1 = float2(v1.v);
  const p2 = float2(v2.v);

  {
    // backface culling
    const v = sub(p2, p0);
    const w = sub(p1, p0);

    const isBack = cross(v, w) >= 0;

    if (isBack) return;
  }

  const minX = Math.floor(Math.min(p0[0], p1[0], p2[0]));
  const minY = Math.floor(Math.min(p0[1], p1[1], p2[1]));
  const maxX = Math.ceil(Math.max(p0[0], p1[0], p2[0]));
  const maxY = Math.ceil(Math.max(p0[1], p1[1], p2[1]));

  let vu;
  let vv;

  const shouldTexture = typeof textures[0] !== "undefined" && hasUV;

  if (shouldTexture) {
    vu = float3([v0.t.u, v1.t.u, v2.t.u]);
    vv = float3([v0.t.v, v1.t.v, v2.t.v]);
  }

  for (let x = minX; x < maxX; x += 1) {
    for (let y = minY; y < maxY; y += 1) {
      const p = float2([x, y]);
      const barycentric = getBarycentric(p, p0, p1, p2);
      const isInside = barycentric.every(e => e >= 0);
      if (isInside) {
        const index = (y * width + x) * 4;
        let color = float4([0xff, 0xff, 0xff, 0xff]);
        if (shouldTexture) {
          const u = dot(barycentric, vu);
          const v = dot(barycentric, vv);
          color = getPixelFromTexture(textures[0], u, v);
        }
        framebuffer[index + 0] = color[0];
        framebuffer[index + 1] = color[1];
        framebuffer[index + 2] = color[2];
        framebuffer[index + 3] = color[3];
      }
    }
  }
}