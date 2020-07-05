export type float = number;
/**
 * 0\
 * 1\
 * 2\
 * 3
 */
export type floats = float2 | float3 | float4;
export type float2 = [number, number];
export type float3 = [number, number, number];
export type float4 = [number, number, number, number];
/**
 * 00 10 20 30\
 * 01 11 21 31\
 * 02 12 22 32\
 * 03 13 23 33
 */
export type matrix =
  matrix2x2 | matrix2x3 | matrix2x4 |
  matrix3x2 | matrix3x3 | matrix3x4 |
  matrix4x2 | matrix4x3 | matrix4x4;
/** square matrix */
export type square =
  matrix2x2 | matrix3x3 | matrix4x4;
export type matrix2x2 = [float2, float2];
export type matrix2x3 = [float2, float2, float2];
export type matrix2x4 = [float2, float2, float2, float2];
export type matrix3x2 = [float3, float3];
export type matrix3x3 = [float3, float3, float3];
export type matrix3x4 = [float3, float3, float3, float3];
export type matrix4x2 = [float4, float4];
export type matrix4x3 = [float4, float4, float4];
export type matrix4x4 = [float4, float4, float4, float4];

// cast object to mathematics type
export const float = (v: number): float => v;
export function float2(x: { x: number, y: number }): float2;
export function float2(x: floats): float2;
export function float2(x: any): float2 {
  if (Array.isArray(x))
    return [x[0], x[1]];
  else
    return [x.x, x.y];
}
export function float3(x: { x: number, y: number, z: number }): float3;
export function float3(x: float3 | float4): float3;
export function float3(x: any): float3 {
  if (Array.isArray(x))
    return [x[0], x[1], x[2]];
  else
    return [x.x, x.y, x.z];
}
export function float4(x: { x: number, y: number, z: number, w: number }): float4;
export function float4(x: float4): float4;
export function float4(x: any): float4 {
  if (Array.isArray(x))
    return [x[0], x[1], x[2], x[4]];
  else
    return [x.x, x.y, x.z, x.w];
}
// float to matrix
export const matrix2x2 = (f0: float2, f1: float2): matrix2x2 => [
  [f0[0], f0[1]],
  [f1[0], f1[1]]
];
export const matrix2x3 = (f0: float2, f1: float2, f2: float2): matrix2x3 => [
  [f0[0], f0[1]],
  [f1[0], f1[1]],
  [f2[0], f2[1]],
];
export const matrix2x4 = (f0: float2, f1: float2, f2: float2, f3: float2): matrix2x4 => [
  [f0[0], f0[1]],
  [f1[0], f1[1]],
  [f2[0], f2[1]],
  [f3[0], f3[1]],
];
export const matrix3x2 = (f0: float3, f1: float3): matrix3x2 => [
  [f0[0], f0[1], f0[2]],
  [f1[0], f1[1], f1[2]]
];
export const matrix3x3 = (f0: float3, f1: float3, f2: float3): matrix3x3 => [
  [f0[0], f0[1], f0[2]],
  [f1[0], f1[1], f1[2]],
  [f2[0], f2[1], f2[2]],
];
export const matrix3x4 = (f0: float3, f1: float3, f2: float3, f3: float3): matrix3x4 => [
  [f0[0], f0[1], f0[2]],
  [f1[0], f1[1], f1[2]],
  [f2[0], f2[1], f2[2]],
  [f3[0], f3[1], f3[2]],
];
export const matrix4x2 = (f0: float4, f1: float4): matrix4x2 => [
  [f0[0], f0[1], f0[2], f0[3]],
  [f1[0], f1[1], f1[2], f1[3]]
];
export const matrix4x3 = (f0: float4, f1: float4, f2: float4): matrix4x3 => [
  [f0[0], f0[1], f0[2], f0[3]],
  [f1[0], f1[1], f1[2], f1[3]],
  [f2[0], f2[1], f2[2], f2[3]],
];
export const matrix4x4 = (f0: float4, f1: float4, f2: float4, f3: float4): matrix4x4 => [
  [f0[0], f0[1], f0[2], f0[3]],
  [f1[0], f1[1], f1[2], f1[3]],
  [f2[0], f2[1], f2[2], f2[3]],
  [f3[0], f3[1], f3[2], f3[3]],
];
export function transpose(m: matrix2x2): matrix2x2;
export function transpose(m: matrix2x3): matrix3x2;
export function transpose(m: matrix2x4): matrix4x2;
export function transpose(m: matrix3x2): matrix2x3;
export function transpose(m: matrix3x3): matrix3x3;
export function transpose(m: matrix3x4): matrix4x3;
export function transpose(m: matrix4x2): matrix2x4;
export function transpose(m: matrix4x3): matrix3x4;
export function transpose(m: matrix4x4): matrix4x4;
export function transpose(m: matrix): matrix {
  // TODO
  return;
}
export function add<F extends floats>(f0: F, f1: F): F {
  switch (f0.length) {
    case 2: return [
      f0[0] + f1[0],
      f0[1] + f1[1]
    ] as F;
    case 3: return [
      f0[0] + f1[0],
      f0[1] + f1[1],
      f0[2] + f1[2],
    ] as F;
    case 4: return [
      f0[0] + f1[0],
      f0[1] + f1[1],
      f0[2] + f1[2],
      f0[3] + f1[3],
    ] as F;
  }
}
export function addm<M extends matrix>(m0: M, m1: M): M {
  return m0.map(<F extends floats>(e: F, i: number): F => add<F>(e, m1[i] as F)) as M;
}
export function sub<F extends floats>(f0: F, f1: F): F {
  switch (f0.length) {
    case 2: return [
      f0[0] - f1[0],
      f0[1] - f1[1]
    ] as F;
    case 3: return [
      f0[0] - f1[0],
      f0[1] - f1[1],
      f0[2] - f1[2],
    ] as F;
    case 4: return [
      f0[0] - f1[0],
      f0[1] - f1[1],
      f0[2] - f1[2],
      f0[3] - f1[3],
    ] as F;
  }
}
export function subm<M extends matrix>(m0: M, m1: M): M {
  return m0.map(<F extends floats>(e: F, i: number): F => sub<F>(e, m1[i] as F)) as M;
}

export const mul = <F extends floats>(s: float, f: F): F => f.map(v => v * s) as F;
export const mulm = <M extends matrix>(s: float, m: M): M => m.map(f => mul(s, f)) as M;

export function dot<F extends floats>(m: F, n: F): float {
  switch (m.length) {
    case 2: return m[0] * n[0] + m[1] * n[1];
    case 3: return m[0] * n[0] + m[1] * n[1] + m[2] * n[2];
    case 4: return m[0] * n[0] + m[1] * n[1] + m[2] * n[2] + m[3] * n[3];
  }
}
export function dotm(m: matrix2x2, n: matrix2x2): matrix2x2;
export function dotm(m: matrix2x3, n: matrix3x2): matrix3x2;
export function dotm(m: matrix2x4, n: matrix4x2): matrix4x2;
export function dotm(m: matrix2x2, n: matrix2x3): matrix2x3;
export function dotm(m: matrix2x3, n: matrix3x3): matrix3x3;
export function dotm(m: matrix2x4, n: matrix4x3): matrix4x3;
export function dotm(m: matrix2x2, n: matrix2x4): matrix2x4;
export function dotm(m: matrix2x3, n: matrix3x4): matrix3x4;
export function dotm(m: matrix2x4, n: matrix4x4): matrix4x4;

export function dotm(m: matrix3x2, n: matrix2x2): matrix2x2;
export function dotm(m: matrix3x3, n: matrix3x2): matrix3x2;
export function dotm(m: matrix3x4, n: matrix4x2): matrix4x2;
export function dotm(m: matrix3x2, n: matrix2x3): matrix2x3;
export function dotm(m: matrix3x3, n: matrix3x3): matrix3x3;
export function dotm(m: matrix3x4, n: matrix4x3): matrix4x3;
export function dotm(m: matrix3x2, n: matrix2x4): matrix2x4;
export function dotm(m: matrix3x3, n: matrix3x4): matrix3x4;
export function dotm(m: matrix3x4, n: matrix4x4): matrix4x4;

export function dotm(m: matrix4x2, n: matrix2x2): matrix2x2;
export function dotm(m: matrix4x3, n: matrix3x2): matrix3x2;
export function dotm(m: matrix4x4, n: matrix4x2): matrix4x2;
export function dotm(m: matrix4x2, n: matrix2x3): matrix2x3;
export function dotm(m: matrix4x3, n: matrix3x3): matrix3x3;
export function dotm(m: matrix4x4, n: matrix4x3): matrix4x3;
export function dotm(m: matrix4x2, n: matrix2x4): matrix2x4;
export function dotm(m: matrix4x3, n: matrix3x4): matrix3x4;
export function dotm(m: matrix4x4, n: matrix4x4): matrix4x4;
export function dotm<M extends matrix, N extends matrix>(m: M, n: N): N {
  // TODO
  return;
}
export function det(m: square): float {
  switch (m.length) {
    case 2: return m[0][0] * m[1][1] - m[1][0] * m[0][1];
    case 3: return (
      m[0][0] * det([[m[1][1], m[1][2]], [m[2][1], m[2][2]]])
    - m[1][0] * det([[m[0][1], m[0][2]], [m[2][1], m[2][2]]])
    + m[2][0] * det([[m[0][1], m[0][2]], [m[1][1], m[1][2]]])
    );
    case 4: return (
      m[0][0] * det([[m[1][1], m[1][2], m[1][3]], [m[2][1], m[2][2], m[2][3]], [m[3][1], m[3][2], m[3][3]]])
    - m[1][0] * det([[m[0][1], m[0][2], m[0][3]], [m[2][1], m[2][2], m[2][3]], [m[3][1], m[3][2], m[3][3]]])
    + m[2][0] * det([[m[0][1], m[0][2], m[0][3]], [m[1][1], m[1][2], m[1][3]], [m[3][1], m[3][2], m[3][3]]])
    - m[3][0] * det([[m[0][1], m[0][2], m[0][3]], [m[1][1], m[1][2], m[1][3]], [m[2][1], m[2][2], m[2][3]]])
    );
  }
}
export function cross(m: float2, n: float2): float;
export function cross(m: float3, n: float3): float3;
export function cross(m: any, n: any): any {
  switch (m.length) {
    case 2: return det(matrix2x2(m, n));
    case 3: return [
      det([[m[1], n[2]], [m[1], n[2]]]),
      det([[m[0], n[2]], [m[0], n[2]]]),
      det([[m[0], n[1]], [m[0], n[1]]]),
    ];
  }
}