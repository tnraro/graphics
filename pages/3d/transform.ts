import { matrix4x4, float, float3, float4, I4x4 } from "../mathematics";
import * as math from "../mathematics/math";

export type Transform = matrix4x4;
export const newTransform = I4x4;
export const scale = (x: float = 1, y: float = 1, z: float = 1): Transform => [
  [x, 0, 0, 0],
  [0, y, 0, 0],
  [0, 0, z, 0],
  [0, 0, 0, 1]
];
/**
 * TODO: Use quaternion to implement rotation matrix
 * r r r 0
 * r r r 0
 * r r r 0
 * 0 0 0 1
 */
export const rotate = (xyz: float3, angle: float): Transform => I4x4();
export const translate = (x: float = 1, y: float = 1, z: float = 1): Transform => [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [x, y, z, 1]
];
export const getPoint = (t: Transform): float4 => {
  // t * [1, 1, 1, 1]
  const [p] = math.mul4x4x1(t, [[1, 1, 1, 1]]);
  return p;
};
export const getVector = (t: Transform): float4 => {
  // t * [1, 1, 1, 0]
  const [p] = math.mul4x4x1(t, [[1, 1, 1, 0]]);
  return p;
};