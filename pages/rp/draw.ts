import { IProp, gBuffering, State } from "./pass";
import { IModel } from "../3d/model";
import { getPerspectiveProjectionMatrix } from "../3d/camera";
import * as math from "../mathematics/math";
import { getViewMatrix } from "../3d/view";
import type { float3, matrix4x4, float4, float } from "../mathematics/types";
import { unsafe_r24 } from "./buffer";

const getMVP = (prop: IProp, model: IModel): matrix4x4 => {
  const { camera } = prop;
  const m = model.transform;
  const v = getViewMatrix(camera.view);
  const p = getPerspectiveProjectionMatrix(camera);
  const mul = math.mul4x4x4;
  return mul(p, mul(v, m));
}
const getNDCAxis = (f0: float, f1: float, f2: float, f3: float, p: float3): float => {
  return f0 * p[0] + f1 * p[1] + f2 * p[2] + f3;
}
const isBackface = (x0: float, y0: float, x1: float, y1: float, x2: float, y2: float): boolean => {
  return (x2 - x0) * (y1 - y0) - (y2 - y0) * (x1 - x0) >= 0;
}
const isOutOfFrustum = (x0: float, y0: float, z0: float): boolean => {
  return x0 < -1 || x0 > 1 ||
         y0 < -1 || y0 > 1 ||
         z0 < -1 || z0 > 1;
}
export const draw = (prop: IProp) => {
  let state: State = {
    x0: 0, x1: 0, x2: 0,
    y0: 0, y1: 0, y2: 0,
    z0: 0, z1: 0, z2: 0,
    w0: 0, w1: 0, w2: 0,
    oz0: 0, oz1: 0, oz2: 0,
    tu0: 0, tv0: 0,
    tu1: 0, tv1: 0,
    tu2: 0, tv2: 0,
  }
  for (const model of prop.models) {
    const mvp = getMVP(prop, model);
    let mvpX: float4 = [mvp[0][0], mvp[1][0], mvp[2][0], mvp[3][0]];
    let mvpY: float4 = [mvp[0][1], mvp[1][1], mvp[2][1], mvp[3][1]];
    let mvpZ: float4 = [mvp[0][2], mvp[1][2], mvp[2][2], mvp[3][2]];
    let mvpW: float4 = [mvp[0][3], mvp[1][3], mvp[2][3], mvp[3][3]];
    let mvpxx = mvpX[0];
    let mvpxy = mvpX[1];
    let mvpxz = mvpX[2];
    let mvpxw = mvpX[3];
    let mvpyx = mvpY[0];
    let mvpyy = mvpY[1];
    let mvpyz = mvpY[2];
    let mvpyw = mvpY[3];
    let mvpzx = mvpZ[0];
    let mvpzy = mvpZ[1];
    let mvpzz = mvpZ[2];
    let mvpzw = mvpZ[3];
    let mvpwx = mvpW[0];
    let mvpwy = mvpW[1];
    let mvpwz = mvpW[2];
    let mvpww = mvpW[3];
    for (let i = 0; i < model.faces.length; i++) {
      const face = model.faces[i];
      const v0 = model.vertices[face[0]];
      const v1 = model.vertices[face[1]];
      const v2 = model.vertices[face[2]];
      let p = v0[0],
          x0 = getNDCAxis(mvpxx, mvpxy, mvpxz, mvpxw, p),
          y0 = getNDCAxis(mvpyx, mvpyy, mvpyz, mvpyw, p),
          z0 = getNDCAxis(mvpzx, mvpzy, mvpzz, mvpzw, p),
          w0 = getNDCAxis(mvpwx, mvpwy, mvpwz, mvpww, p),
          oz0 = z0,
          divw = 1 / w0;
      x0 *= divw;
      y0 *= divw;
      z0 *= divw;
      p = v1[0];
      let x1 = getNDCAxis(mvpxx, mvpxy, mvpxz, mvpxw, p),
          y1 = getNDCAxis(mvpyx, mvpyy, mvpyz, mvpyw, p),
          z1 = getNDCAxis(mvpzx, mvpzy, mvpzz, mvpzw, p),
          w1 = getNDCAxis(mvpwx, mvpwy, mvpwz, mvpww, p),
          oz1 = z1;
      divw = 1 / w1;
      x1 *= divw;
      y1 *= divw;
      z1 *= divw;
      p = v2[0];
      let x2 = getNDCAxis(mvpxx, mvpxy, mvpxz, mvpxw, p),
          y2 = getNDCAxis(mvpyx, mvpyy, mvpyz, mvpyw, p),
          z2 = getNDCAxis(mvpzx, mvpzy, mvpzz, mvpzw, p),
          w2 = getNDCAxis(mvpwx, mvpwy, mvpwz, mvpww, p),
          oz2 = z2;
      divw = 1 / w2;
      x2 *= divw;
      y2 *= divw;
      z2 *= divw;
      if (isBackface(x0, y0, x1, y1, x2, y2)) {
        continue;
      }
      if (isOutOfFrustum(x0, y0, z0) &&
        isOutOfFrustum(x1, y1, z1) &&
        isOutOfFrustum(x2, y2, z2)) {
        continue;
      }
      state.x0 = x0; state.x1 = x1; state.x2 = x2;
      state.y0 = y0; state.y1 = y1; state.y2 = y2;
      state.z0 = z0; state.z1 = z1; state.z2 = z2;
      state.w0 = w0; state.w1 = w1; state.w2 = w2;
      state.oz0 = oz0; state.oz1 = oz1; state.oz2 = oz2;
      let t = v0[1];
      state.tu0 = t[0];
      state.tv0 = t[1];
      t = v1[1];
      state.tu1 = t[0];
      state.tv1 = t[1];
      t = v2[1];
      state.tu2 = t[0];
      state.tv2 = t[1];
      gBuffering(prop, state);
    }
  }
  {
    const { _debugShowBuffer } = prop;
    switch (_debugShowBuffer) {
      case 0: drawDeferredRendering(prop);
        break;
      case 1: drawZBuffer(prop);
        break;
      case 5: drawAlbedoBuffer(prop);
        break;
    }
  }
}
const drawZBuffer = (prop: IProp) => {
  const { width, height, buffers } = prop;
  const framebuffer = buffers[0]!.data;
  const zbuf = buffers[1]!.data;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (y * width + x) * 4;
      let depth = unsafe_r24(zbuf[index], zbuf[index + 1], zbuf[index + 2]);
      if (depth === 0xffffff) {
        continue;
      }
      framebuffer[index] = 0xff - depth / 0xffff;
      framebuffer[index + 3] = zbuf[index + 3];
    }
  }
}
const drawAlbedoBuffer = (prop: IProp) => {
  const { width, height, buffers } = prop;
  const framebuffer = buffers[0]!.data;
  const albedo = buffers[5]!.data;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (y * width + x) * 4;
      framebuffer[index] = albedo[index];
      framebuffer[index + 1] = albedo[index + 1];
      framebuffer[index + 2] = albedo[index + 2];
      framebuffer[index + 3] = albedo[index + 3];
    }
  }
}
const drawDeferredRendering = (prop: IProp) => {
  const { width, height, buffers } = prop;
  const framebuffer = buffers[0]!.data;
  const zbuf = buffers[1]!.data;
  const albedo = buffers[5]!.data;
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let index = (y * width + x) * 4;
      let depth = unsafe_r24(zbuf[index], zbuf[index + 1], zbuf[index + 2]);
      if (depth === 0xffffff) {
        continue;
      }
      framebuffer[index] = albedo[index];
      framebuffer[index + 1] = albedo[index + 1];
      framebuffer[index + 2] = albedo[index + 2];
      framebuffer[index + 3] = 0xff;
    }
  }
}