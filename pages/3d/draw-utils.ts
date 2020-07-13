import {
  float2, float3
} from "../mathematics";
import * as math from "../mathematics/math";
export const getBarycentric = ([x0, x1, x2]: float3, [y0, y1, y2]: float3, [px, py]: float2): float3 => {
  const u: float2 = [x1 - x0, y1 - y0];
  const v: float2 = [x0 - x2, y0 - y2];
  const area = math.cross22(u, v);
  const w1 = math.cross22([px - x0, py - y0], v) / area;
  const w2 = math.cross22([px - x1, py - y1], u) / area;
  const w0 = 1 - w1 - w2;
  return [w0, w1, w2];
}