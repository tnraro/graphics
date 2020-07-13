import drawZBuffer from "./draw-z-buffer";
import drawFramebuffer from "./draw-framebuffer";
import { float, float2, float3, float4, matrix4x4, I4x4, matrix3x3, matrix3x2, matrix2x3 } from "../mathematics";
import * as m from "./model";
import * as math from "../mathematics/math";
import { ITexture } from "../comps/header";
import { View, getViewMatrix } from "./view";
import { ICamera, getPerspectiveProjectionMatrix } from "./camera";
import * as DrawPass from "../comps/hooks/useDrawPass";
import { toCanvas } from "./canvas";
interface IProp {
  context: CanvasRenderingContext2D,
  model: m.IModel,
  camera: ICamera,
  width: float,
  height: float,
  textures: ITexture[],
  drawPass: DrawPass.IState
}
const getMVP = (m: matrix4x4, camera: ICamera, perspective: boolean = true): matrix4x4 => {
  const model = m;
  const view = getViewMatrix(camera.view);
  const projection = getPerspectiveProjectionMatrix(camera);

  const mvp = math.mul4x4x4(projection, math.mul4x4x4(view, model));

  return mvp;
}
const toNDC = (m: matrix4x4, p: float3): float3 => {
  const [[x, y, z, w]] = math.mul4x4x1(m, [float4(p, 1)]);
  // TODO: important
  return [x / w, y / w, z / w];
}
export const draw = (props: IProp) => {
  const { context, model, camera, width, height, textures, drawPass } = props;

  const img = context.getImageData(0, 0, width, height);
  const zBuffer = new Uint16Array(width * height);
  const texture = textures[0] && textures[0].buf;
  const framebuffer = img.data;
  const mvp = getMVP(model.transform, camera);
  for (const face of model.faces) {
    const [v0, v1, v2] = [
      model.vertices[face[0]],
      model.vertices[face[1]],
      model.vertices[face[2]],
    ];
    const p0 = toNDC(mvp, v0.p);
    const p1 = toNDC(mvp, v1.p);
    const p2 = toNDC(mvp, v2.p);
    const t0: float2 = v0.t;
    const t1: float2 = v1.t;
    const t2: float2 = v2.t;
    {
      // backface culling
      const p = math.xy(p0);
      const v = math.sub22(math.xy(p2), p);
      const w = math.sub22(math.xy(p1), p);

      const isBack = math.cross22(v, w) >= 0;

      if (isBack) {
        continue;
      }
    }
    {
      // Frustum culling
      const [x0, y0, z0] = p0;
      const [x1, y1, z1] = p1;
      const [x2, y2, z2] = p2;

      const out0 = x0 < -1 || x0 > 1 ||
                   y0 < -1 || y0 > 1 ||
                   z0 < -1 || z0 > 1;
      const out1 = x1 < -1 || x1 > 1 ||
                   y1 < -1 || y1 > 1 ||
                   z1 < -1 || z1 > 1;
      const out2 = x2 < -1 || x2 > 1 ||
                   y2 < -1 || y2 > 1 ||
                   z2 < -1 || z2 > 1;
      if (out0 && out1 && out2) {
        continue;
      }
    }
    const tc = toCanvas.bind(undefined, width, height, 0xffff);
    const p: matrix3x3 = math.transpose3x3([
      tc(p0),
      tc(p1),
      tc(p2)
    ]);
    const t: matrix3x2 = math.transpose2x3([t0, t1, t2]);
    drawZBuffer({
      p
    }, {
      zBuffer, camera,
      width, height,
      framebuffer,
      isVisible: drawPass.zBuffer
    });
    drawFramebuffer({
      p, t
    }, {
      framebuffer,
      zBuffer, camera,
      width, height,
      texture,
      isVisible: drawPass.framebuffer
    });
  }
  context.putImageData(img, 0, 0);
}