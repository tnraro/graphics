import drawZBuffer from "./draw-z-buffer";
import drawFramebuffer from "./draw-framebuffer";
import { float2, float3, float4, matrix4x4, sub, cross } from "./mathematics";

const mapVertex = (model, indices) => {
  const {v, t, n} = indices;

  return {
    v: model.v[v],
    t: model.vt[t],
    n: model.vn[n]
  };
}
const linearMap = (v: float4, model: matrix4x4): float4 => {
  return [
    v[0] * model[0][0] + model[3][0],
    v[1] * model[1][1] + model[3][1],
    v[2] * model[2][2] + model[3][2],
    1
  ];
}
export const draw = (props) => {
  const { context, model, view, width, height, textures } = props;

  const img = context.getImageData(0, 0, width, height);
  const zBuffer = new Uint16Array(width * height);
  const zb = model.v.map(v => v.z);
  const scale = 1;
  const clip = {
    zMax: Math.max.apply(undefined, zb) * scale,
    zMin: Math.min.apply(undefined, zb) * scale,
  };
  const texture = textures[0] && textures[0].buf;
  const framebuffer = img.data;
  for (const face of model.f) {
    const [v0, v1, v2] = face.map(mapVertex.bind(undefined, model));

    const [x, y, z, s] = [530 / 2, 298 / 2, 0, scale];
    const matrix = [
      [s, 0, 0, 0],
      [0, s, 0, 0],
      [0, 0, s, 0],
      [x, y, z, 1],
    ] as matrix4x4;
    const p0 = linearMap(float4(v0.v), matrix);
    const p1 = linearMap(float4(v1.v), matrix);
    const p2 = linearMap(float4(v2.v), matrix);
    const px: float3 = [p0[0], p1[0], p2[0]];
    const py: float3 = [p0[1], p1[1], p2[1]];
    const pz: float3 = [p0[2], p1[2], p2[2]];
    const pw: float3 = [p0[3], p1[3], p2[3]];
    const tu: float3 = [v0.t.u, v1.t.u, v2.t.u];
    const tv: float3 = [v0.t.v, v1.t.v, v2.t.v];
    {
      // backface culling
      const p = float2(p0);
      const v = sub(float2(p2), p);
      const w = sub(float2(p1), p);

      const isBack = cross(v, w) >= 0;

      if (isBack)
        continue;
    }
    drawZBuffer({
      px, py, pz, pw
    }, {
      zBuffer, clip,
      width, height,
      framebuffer,
      isVisible: false
    });
    drawFramebuffer({
      px, py, pz, pw,
      tu, tv,
    }, {
      framebuffer,
      zBuffer, clip,
      width, height,
      texture,
    });
  }

  context.fillStyle = "white";
  context.fillRect(200, 150, 100, 100);
  context.putImageData(img, 0, 0);
}