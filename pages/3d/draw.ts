import drawZBuffer from "./draw-z-buffer";
import drawFramebuffer from "./draw-framebuffer";
import { float, float2, float3, float4, matrix4x4, sub, cross } from "./mathematics";
import * as m from "./model";

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
  const zb = model.vertices.map(v => v[2]);
  const scale = 1;
  const clip = {
    zMax: Math.max.apply(undefined, zb) * scale,
    zMin: Math.min.apply(undefined, zb) * scale,
  };
  const texture = textures[0] && textures[0].buf;
  const framebuffer = img.data;
  const mapv = (vertexIndex: float) => model.vertices[vertexIndex];
  for (const face of model.faces) {
    const [v0, v1, v2] = face.map(mapv);

    const [x, y, z, s] = [530 / 2, 298 / 2, 0, scale];
    const matrix = [
      [s, 0, 0, 0],
      [0, s, 0, 0],
      [0, 0, s, 0],
      [x, y, z, 1],
    ] as matrix4x4;
    const p0 = linearMap(m.xyzw(v0), matrix);
    const p1 = linearMap(m.xyzw(v1), matrix);
    const p2 = linearMap(m.xyzw(v2), matrix);
    const px: float3 = [p0[0], p1[0], p2[0]];
    const py: float3 = [p0[1], p1[1], p2[1]];
    const pz: float3 = [p0[2], p1[2], p2[2]];
    const pw: float3 = [p0[3], p1[3], p2[3]];
    const t0: float2 = m.uv(v0);
    const t1: float2 = m.uv(v1);
    const t2: float2 = m.uv(v2);
    const tu: float3 = [t0[0], t1[0], t2[0]];
    const tv: float3 = [t0[1], t1[1], t2[1]];
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