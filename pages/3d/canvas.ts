import type { float, matrix4x3, float3, float2 } from "../mathematics/types";

export const toCanvas2 = (width: float, height: float, xy: float2): float2 => {
  const [x, y] = xy;
  const w = width * 0.5;
  const h = height * 0.5;
  return [
    w * x + w,
    - h * y + h
  ];
}
export const toCanvas = (width: float, height: float, depth: float, xyz: float3): float3 => {
  const [x, y, z] = xyz;
  const w = width * 0.5;
  const h = height * 0.5;
  const d = depth * 0.5;
  return [
    w * x + w,
    - h * y + h,
    d * z + d
  ];
}
export const toCanvasMatrix = (width: float, height: float, depth: float): matrix4x3 => {
  const w = width * 0.5;
  const h = height * 0.5;
  const d = depth * 0.5;
  return [
    [w, 0, 0, w],
    [0,-h, 0, h],
    [0, 0, d, d],
  ];
};
export const toNDC2 = (width: float, height: float, xy: float2): float2 => {
  const [x, y] = xy;
  const w = 2 / width;
  const h = 2 / height;
  return [
    w * x - 1,
    1 - h * y,
  ];
}
export const toNDC = (width: float, height: float, depth: float, xyz: float3): float3 => {
  const [x, y, z] = xyz;
  const w = 2 / width;
  const h = 2 / height;
  const d = 2 / depth;
  return [
    w * x - 1,
    1 - h * y,
    d * z - 1
  ];
}
export const toNDCMatrix = (width: float, height: float, depth: float): matrix4x3 => {
  const w = 2 / width;
  const h = 2 / height;
  const d = 2 / depth;
  return [
    [w, 0, 0, -1],
    [0, -h, 0, 1],
    [0, 0, d, -1],
  ];
};