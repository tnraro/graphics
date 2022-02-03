import type { float3, float } from "./mathematics/types";
import { ICamera } from "./models/camera";
import { IModel } from "./models/model";
import type { ITexture } from "./types";
import { rxyz, wxyz } from "./buffer";
export interface IProp {
  camera: ICamera;
  models: IModel[];
  buffers: (ImageData | null)[];
  width: float;
  height: float;
  textures: ITexture[];
  _debugShowBuffer: number;
}
export type State = {
  x0: float, x1: float, x2: float,
  y0: float, y1: float, y2: float,
  z0: float, z1: float, z2: float,
  w0: float, w1: float, w2: float,
  oz0: float, oz1: float, oz2: float,
  tu0: float, tv0: float,
  tu1: float, tv1: float,
  tu2: float, tv2: float,
};
export type ISubPass = (prop: IProp, out: State) => void;
const toScreenX = (v: float, amount: float) => (v + 1) * 0.5 * amount;
const toScreenY = (v: float, amount: float) => (1 - v) * 0.5 * amount;
const dot = (
  x0: float, y0: float, z0: float,
  x1: float, y1: float, z1: float
  ): float => x0 * x1 + y0 * y1 + z0 * z1;
export const gBuffering: ISubPass = (prop, out) => {
  const width = prop.width,
    height = prop.height,
    framebuffer = prop.buffers[0]!,
    zbuf = prop.buffers[1]!,
    albedo = prop.buffers[5]!,
    near = prop.camera.near,
    far = prop.camera.far;
  let x0 = toScreenX(out.x0, width),
    x1 = toScreenX(out.x1, width),
    x2 = toScreenX(out.x2, width),
    y0 = toScreenY(out.y0, height),
    y1 = toScreenY(out.y1, height),
    y2 = toScreenY(out.y2, height),
    z0 = out.oz0,
    z1 = out.oz1,
    z2 = out.oz2,
    tu0 = out.tu0,
    tu1 = out.tu1,
    tu2 = out.tu2,
    tv0 = out.tv0,
    tv1 = out.tv1,
    tv2 = out.tv2,
    mx = Math.min(x0, x1, x2),
    my = Math.min(y0, y1, y2),
    Mx = Math.max(x0, x1, x2),
    My = Math.max(y0, y1, y2),
    normz = 1 / (far - near) * 0xffffff,
    x: float, y: float, z: float,
    index: float, barycentric: float3,
    w0: float, w1: float, w2: float;
  Mx = Math.min(Mx, width);
  My = Math.min(My, height);
  mx = Math.max(mx, 0) | 0;
  my = Math.max(my, 0) | 0;
  Mx = Math.ceil(Mx);
  My = Math.ceil(My);
  z0 = 1 / z0;
  z1 = 1 / z1;
  z2 = 1 / z2;
  tu0 *= z0; tv0 *= z0;
  tu1 *= z1; tv1 *= z1;
  tu2 *= z2; tv2 *= z2;
  const texture = prop.textures[0];
  for (x = mx; x < Mx; x++) {
    for (y = my; y < My; y++) {
      index = y * width + x;
      barycentric = getBarycentric(x0, x1, x2, y0, y1, y2, x, y);
      w0 = barycentric[0];
      w1 = barycentric[1];
      w2 = barycentric[2];
      if (w0 < 0 || w1 < 0 || w2 < 0) {
        continue;
      }
      z = dot(w0, w1, w2, z0, z1, z2);
      z = 1 / z;
      let nz = (z - near) * normz | 0;
      if (nz <= 0 || nz > 0xffffff) {
        continue;
      }
      let depth = rxyz(zbuf.data, index);
      if (depth <= nz) {
        continue;
      }
      wxyz(zbuf.data, index, nz);
      if (texture) {
        let u = dot(w0, w1, w2, tu0, tu1, tu2);
        let v = dot(w0, w1, w2, tv0, tv1, tv2);
        const textureBuf = texture.buf!;
        u *= z;
        v *= z;
        v = 1 - v;
        u = Math.round(u * textureBuf.width);
        v = Math.round(v * textureBuf.height);
        const tIndex = v * textureBuf.width + u;
        let r = textureBuf.data[tIndex * 4];
        let g = textureBuf.data[tIndex * 4 + 1];
        let b = textureBuf.data[tIndex * 4 + 2];
        let a = textureBuf.data[tIndex * 4 + 3];
        albedo.data[index * 4] = r;
        albedo.data[index * 4 + 1] = g;
        albedo.data[index * 4 + 2] = b;
        albedo.data[index * 4 + 3] = a;
      } else {
        albedo.data[index * 4] = 0x53;
        albedo.data[index * 4 + 1] = 0x53;
        albedo.data[index * 4 + 2] = 0x53;
        albedo.data[index * 4 + 3] = 0x53;
      }
    }
  }
}
export const getBarycentric = (
  x0: float, x1: float, x2: float,
  y0: float, y1: float, y2: float,
  px: float, py: float): float3 => {
  let ux = x1 - x0, uy = y1 - y0,
      vx = x0 - x2, vy = y0 - y2,
      ax = px - x0, ay = py - y0,
      bx = px - x1, by = py - y1,
      area = 1 / (ux * vy - uy * vx),
      w1 = (ax * vy - ay * vx) * area,
      w2 = (bx * uy - by * ux) * area,
      w0 = 1 - w1 - w2;
  return [w0, w1, w2];
}