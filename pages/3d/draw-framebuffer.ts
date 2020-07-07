import {
  float, float2, float3, float4,
  matrix4x4,
  sub,
  cross,
  dot,
} from "./mathematics";
import {
  getBarycentric
} from "./draw-utils";

const getPixelFromTexture = (texture, u: float, v: float): float4 => {
  const { width, height, data } = texture;
  const x = Math.round(u * width);
  const y = Math.round((1 - v) * height);
  const index = (y * width + x) * 4;
  const r = data[index + 0];
  const g = data[index + 1];
  const b = data[index + 2];
  const a = data[index + 3];
  return [ r, g, b, a ];
}
const drawFramebuffer = (props, global) => {
  const {
    params
  } = props;
  const {
    framebuffer, zBuffer,
    clip, width, height, texture
  } = global;

  const [px, py, pz, pw, tu, tv] = params;

  const hasUV =
    typeof tu !== "undefined" &&
    typeof tv !== "undefined";

  const shouldTexture = typeof texture !== "undefined" && hasUV;

  const vz: float3 = pz.map(z => Math.max(Math.min((z - clip.zMin) / (clip.zMax - clip.zMin), 1), 0) * 0xffff) as float3;

  const minX = Math.max(Math.floor(Math.min(...px)), 0);
  const minY = Math.max(Math.floor(Math.min(...py)), 0);
  const maxX = Math.min(Math.ceil(Math.max(...px)), width);
  const maxY = Math.min(Math.ceil(Math.max(...py)), height);

  const getBc = getBarycentric.bind(undefined, px, py);

  for (let x = minX; x < maxX; x += 1) {
    for (let y = minY; y < maxY; y += 1) {
      const p: float2 = [x, y];
      const barycentric: float3 = getBc(p);
      const isInside = barycentric.every(e => e >= 0);
      if (isInside) {
        const z = Math.round(dot(barycentric, vz));
        const index = (height - y) * width + x;
        if (zBuffer[index] === z) {
          let color: float4 = [0xff, 0xff, 0xff, 0xff];
          if (shouldTexture) {
            const u = dot(barycentric, tu);
            const v = dot(barycentric, tv);
            color = getPixelFromTexture(texture, u, v);
          }
          framebuffer[index * 4 + 0] = color[0];
          framebuffer[index * 4 + 1] = color[1];
          framebuffer[index * 4 + 2] = color[2];
          framebuffer[index * 4 + 3] = color[3];
        }
      }
    }
  }
}
export default drawFramebuffer;