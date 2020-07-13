export type float = number;
export type float2 = [number, number];
export type float3 = [number, number, number];
export type float4 = [number, number, number, number];
export const float3 = (xy: float2, z: float): float3 => [xy[0], xy[1], z];
export const float4 = (xyz: float3, w: float): float4 => [xyz[0], xyz[1], xyz[2], w];
/**
 * 0\
 * 1\
 * 2\
 * 3
 */
export type floats = float2 | float3 | float4;
export type matrix1x2 = float2;
export type matrix1x3 = float3;
export type matrix1x4 = float4;
export type matrix2x1 = [float2];
export type matrix3x1 = [float3];
export type matrix4x1 = [float4];
export type matrix2x2 = [float2, float2];
export type matrix2x3 = [float2, float2, float2];
export type matrix2x4 = [float2, float2, float2, float2];
export type matrix3x2 = [float3, float3];
export type matrix3x3 = [float3, float3, float3];
export type matrix3x4 = [float3, float3, float3, float3];
export type matrix4x2 = [float4, float4];
export type matrix4x3 = [float4, float4, float4];
export type matrix4x4 = [float4, float4, float4, float4];
/**
 * 00 10 20 30\
 * 01 11 21 31\
 * 02 12 22 32\
 * 03 13 23 33
 */
export type matrix =
  matrix1x2 | matrix1x3 | matrix1x4 |
  matrix2x2 | matrix2x3 | matrix2x4 |
  matrix3x2 | matrix3x3 | matrix3x4 |
  matrix4x2 | matrix4x3 | matrix4x4;
/** square matrix */
export type square =
  matrix2x2 | matrix3x3 | matrix4x4;
export type quaternion = [float, float, float, float];