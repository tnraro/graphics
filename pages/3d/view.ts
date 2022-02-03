import { float3, matrix4x4, float4 } from "../mathematics/types";
import * as math from "../mathematics/math";

// [v, p]
export type View = [float3, float3];

export const getViewMatrix = (view: View, up: float3 = [0, 1, 0]): matrix4x4 => {
  const [v, p] = view;
  const z = math.mul13(-1, v);
  const nz = math.normalize3(z);
  const x = math.cross33(up, nz);
  const nx = math.normalize3(x);
  const y = math.cross33(nz, nx);
  const ny = math.normalize3(y);
  const t: matrix4x4 = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [-p[0], -p[1], -p[2], 1]
  ];
  const r: matrix4x4 = ([
    float4(nx, 0),
    float4(ny, 0),
    float4(nz, 0),
    [0, 0, 0, 1]
  ]);
  const m = math.mul4x4x4(r, t);
  return m;
};