import {
  float, float2, float3, float4, matrix3x3, matrix3x2,
} from "../mathematics";
import {
  getBarycentric
} from "./draw-utils";
import * as math from "../mathematics/math";
import { ICamera } from "./camera";
import { ITexture } from "../comps/header";

const getPixelFromTexture = (texture: ImageData, u: float, v: float): float4 => {
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
interface IProp {
  p: matrix3x3;
  t: matrix3x2;
}
interface IGlobal {
  framebuffer: Uint8ClampedArray;
  zBuffer: Uint16Array;
  camera: ICamera;
  width: float;
  height: float;
  texture: ImageData;
  isVisible: boolean;
}
const rescale = (v: float, k: float) => (v + 1) * .5 * k;
const drawFramebuffer = (props: IProp, global: IGlobal) => {
  const {
    p, t
  } = props;
  const {
    framebuffer, zBuffer,
    width, height, texture,
    isVisible
  } = global;

  if (!isVisible)
    return;
  const [px, py, pz] = p;
  const [tu, tv] = t;

  // TODO
  const hasUV = true;

  const shouldTexture = typeof texture !== "undefined" && hasUV;

  const minX = Math.max(Math.floor(Math.min(...px)), 0);
  const minY = Math.max(Math.floor(Math.min(...py)), 0);
  const maxX = Math.min(Math.ceil(Math.max(...px)), width);
  const maxY = Math.min(Math.ceil(Math.max(...py)), height);

  const getBc = getBarycentric.bind(undefined, px, py);

  for (let x = minX; x < maxX; x += 1) {
    for (let y = minY; y < maxY; y += 1) {
      const p: float2 = [x, y];
      const barycentric: float3 = getBc(p);
      const isOutside = barycentric[0] < 0 ||
                        barycentric[1] < 0 ||
                        barycentric[2] < 0;
      if (isOutside)
        continue;
      const z = Math.round(math.dot33(barycentric, pz));
      const index = y * width + x;
      if (zBuffer[index] === z) {
        let color: float4 = [0xff, 0xff, 0xff, 0xff];
        if (shouldTexture) {
          const u = math.dot33(barycentric, tu);
          const v = math.dot33(barycentric, tv);
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
export default drawFramebuffer;