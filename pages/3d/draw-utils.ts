import {
  float2, float3,
  sub, cross
} from "./mathematics";
/*
export const getBarycentric = (p0: float2, p1: float2, p2: float2, p: float2): float3 => {
  const u = sub(p1, p0);
  const v = sub(p0, p2);
  const area = cross(u, v);
  const w1 = cross(sub(p, p0), v) / area;
  const w2 = cross(sub(p, p1), u) / area;
  const w0 = 1 - w1 - w2;

  return [w0, w1, w2];
}*/
export const getBarycentric = ([x0, x1, x2]: float3, [y0, y1, y2]: float3, [px, py]: float2): float3 => {
  const u: float2 = [x1 - x0, y1 - y0];
  const v: float2 = [x0 - x2, y0 - y2];
  const area = cross(u, v);
  const w1 = cross([px - x0, py - y0], v) / area;
  const w2 = cross([px - x1, py - y1], u) / area;
  const w0 = 1 - w1 - w2;
  return [w0, w1, w2];
}