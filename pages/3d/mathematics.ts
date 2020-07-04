export type float = number;
export type float2 = [number, number];
export type float3 = [number, number, number];
export type float4 = [number, number, number, number];
export type matrix2x2 = [
  number, number,
  number, number
];
export type matrix3x3 = [
  number, number, number,
  number, number, number,
  number, number, number
];
export type matrix4x4 = [
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
  number, number, number, number,
];
// cast object to mathematics type
export const float = (v: number): float => v;
export function float2(x: { x: number, y: number }): float2;
export function float2(x: float2): float2;
export function float2(x: any): float2 {
  if (Array.isArray(x))
    return x as float2;
  else
    return [x.x, x.y];
}
export function float3(x: { x: number, y: number, z: number }): float3;
export function float3(x: float3): float3;
export function float3(x: any): float3 {
  if (Array.isArray(x))
    return x as float3;
  else
    return [x.x, x.y, x.z];
}
export function float4(x: { x: number, y: number, z: number, w: number }): float4;
export function float4(x: float4): float4;
export function float4(x: any): float4 {
  if (Array.isArray(x))
    return x as float4;
  else
    return [x.x, x.y, x.z, x.w];
}
// float to matrix
export const matrix2x2 = (f0: float2, f1: float2): matrix2x2 => [
  f0[0], f1[0],
  f0[1], f1[1],
];
export const matrix3x3 = (f0: float3, f1: float3, f2: float3): matrix3x3 => [
  f0[0], f1[0], f2[0],
  f0[1], f1[1], f2[1],
  f0[2], f1[2], f2[2],
];
export const matrix4x4 = (f0: float4, f1: float4, f2: float4, f3: float4): matrix4x4 => [
  f0[0], f1[0], f2[0], f3[0],
  f0[1], f1[1], f2[1], f3[1],
  f0[2], f1[2], f2[2], f3[2],
  f0[3], f1[3], f2[3], f3[3],
];
export function add(m: float2, n: float2): float2;
export function add(m: float3, n: float3): float3;
export function add(m: float4, n: float4): float4;
export function add(m: matrix2x2, n: matrix2x2): matrix2x2;
export function add(m: matrix3x3, n: matrix3x3): matrix3x3;
export function add(m: matrix4x4, n: matrix4x4): matrix4x4;
export function add(m: any, n: any): any {
  switch (m.length) {
    case 2:
      return [
        m[0] + n[0],
        m[1] + n[1]
      ];
    case 3:
      return [
        m[0] + n[0],
        m[1] + n[1],
        m[2] + n[2]
      ];
    case 4:
      return [
        m[0] + n[0],
        m[1] + n[1],
        m[2] + n[2],
        m[3] + n[3]
      ];
    case 9:
      return [
        m[0] + n[0], m[1] + n[1], m[2] + n[2],
        m[3] + n[3], m[4] + n[4], m[5] + n[5],
        m[6] + n[6], m[7] + n[7], m[8] + n[8]
      ];
    case 16:
      return [
        m[0] + n[0], m[1] + n[1], m[2] + n[2], m[3] + n[3],
        m[4] + n[4], m[5] + n[5], m[6] + n[6], m[7] + n[7],
        m[8] + n[8], m[9] + n[9], m[10] + n[10], m[11] + n[11],
        m[12] + n[12], m[13] + n[13], m[14] + n[14], m[15] + n[15]
      ];
  }
}
export function sub(m: float2, n: float2): float2;
export function sub(m: float3, n: float3): float3;
export function sub(m: float4, n: float4): float4;
export function sub(m: matrix2x2, n: matrix2x2): matrix2x2;
export function sub(m: matrix3x3, n: matrix3x3): matrix3x3;
export function sub(m: matrix4x4, n: matrix4x4): matrix4x4;
export function sub(m: any, n: any): any {
  switch (m.length) {
    case 2:
      return [
        m[0] - n[0],
        m[1] - n[1]
      ];
    case 3:
      return [
        m[0] - n[0],
        m[1] - n[1],
        m[2] - n[2]
      ];
    case 4:
      return [
        m[0] - n[0],
        m[1] - n[1],
        m[2] - n[2],
        m[3] - n[3]
      ];
    case 9:
      return [
        m[0] - n[0], m[1] - n[1], m[2] - n[2],
        m[3] - n[3], m[4] - n[4], m[5] - n[5],
        m[6] - n[6], m[7] - n[7], m[8] - n[8]
      ];
    case 16:
      return [
        m[0] - n[0], m[1] - n[1], m[2] - n[2], m[3] - n[3],
        m[4] - n[4], m[5] - n[5], m[6] - n[6], m[7] - n[7],
        m[8] - n[8], m[9] - n[9], m[10] - n[10], m[11] - n[11],
        m[12] - n[12], m[13] - n[13], m[14] - n[14], m[15] - n[15]
      ];
  }
}
export const mul = (s: float, m: float2 | float3 | float4 | matrix2x2 | matrix3x3 | matrix4x4) => m.map(v => v * s);

export function dot(m: float2, n: float2): float;
export function dot(m: float3, n: float3): float;
export function dot(m: float4, n: float4): float;
export function dot(m: any, n: any): float {
  switch (m.length) {
    case 2: return m[0] * n[0] + m[1] * n[1];
    case 3: return m[0] * n[0] + m[1] * n[1] + m[2] * n[2];
    case 4: return m[0] * n[0] + m[1] * n[1] + m[2] * n[2] + m[3] * n[3];
  }
}
export function dotm(m: matrix2x2, n: matrix2x2): matrix2x2;
export function dotm(m: matrix3x3, n: matrix3x3): matrix3x3;
export function dotm(m: matrix4x4, n: matrix4x4): matrix4x4;
export function dotm(m: any, n: any): any {
  switch (m.length) {
    case 4: return [
      m[0] * n[0] + m[1] * n[2],
      m[0] * n[1] + m[1] * n[3],
      m[2] * n[0] + m[3] * n[2],
      m[2] * n[1] + m[3] * n[3]
    ];
    case 9: return [
      m[0] * n[0] + m[1] * n[3] + m[2] * n[6],
      m[0] * n[1] + m[1] * n[4] + m[2] * n[7],
      m[0] * n[2] + m[1] * n[5] + m[2] * n[8],
      // ---
      m[3] * n[0] + m[4] * n[3] + m[5] * n[6],
      m[3] * n[1] + m[4] * n[4] + m[5] * n[7],
      m[3] * n[2] + m[4] * n[5] + m[5] * n[8],
      // ---
      m[6] * n[0] + m[7] * n[3] + m[8] * n[6],
      m[6] * n[1] + m[7] * n[4] + m[8] * n[7],
      m[6] * n[2] + m[7] * n[5] + m[8] * n[8]
    ];
    case 16: return [
      m[0] * n[0] + m[1] * n[4] + m[2] * n[8] + m[3] * n[12],
      m[0] * n[1] + m[1] * n[5] + m[2] * n[9] + m[3] * n[13],
      m[0] * n[2] + m[1] * n[6] + m[2] * n[10] + m[3] * n[14],
      m[0] * n[3] + m[1] * n[7] + m[2] * n[11] + m[3] * n[15],
      // ---
      m[4] * n[0] + m[5] * n[4] + m[6] * n[8] + m[7] * n[12],
      m[4] * n[1] + m[5] * n[5] + m[6] * n[9] + m[7] * n[13],
      m[4] * n[2] + m[5] * n[6] + m[6] * n[10] + m[7] * n[14],
      m[4] * n[3] + m[5] * n[7] + m[6] * n[11] + m[7] * n[15],
      // ---
      m[8] * n[0] + m[9] * n[4] + m[10] * n[8] + m[11] * n[12],
      m[8] * n[1] + m[9] * n[5] + m[10] * n[9] + m[11] * n[13],
      m[8] * n[2] + m[9] * n[6] + m[10] * n[10] + m[11] * n[14],
      m[8] * n[3] + m[9] * n[7] + m[10] * n[11] + m[11] * n[15],
      // ---
      m[12] * n[0] + m[13] * n[4] + m[14] * n[8] + m[15] * n[12],
      m[12] * n[1] + m[13] * n[5] + m[14] * n[9] + m[15] * n[13],
      m[12] * n[2] + m[13] * n[6] + m[14] * n[10] + m[15] * n[14],
      m[12] * n[3] + m[13] * n[7] + m[14] * n[11] + m[15] * n[15]
    ];
  }
}
export function det(m: matrix2x2): float;
export function det(m: matrix3x3): float;
export function det(m: matrix4x4): float;
export function det(m: any): float {
  switch (m.length) {
    case 4: return m[0] * m[3] - m[1] * m[2];
    case 9: return (
      m[0] * det([m[4], m[5], m[7], m[8]])
    - m[1] * det([m[3], m[5], m[6], m[8]])
    + m[2] * det([m[3], m[4], m[6], m[7]])
    );
    case 16: return (
      m[0] * det([m[5], m[6], m[7], m[9], m[10], m[11], m[13], m[14], m[15]])
    - m[1] * det([m[4], m[6], m[7], m[8], m[10], m[11], m[12], m[14], m[15]])
    + m[2] * det([m[4], m[5], m[7], m[8], m[9],  m[11], m[12], m[13], m[15]])
    - m[3] * det([m[4], m[5], m[6], m[8], m[9],  m[10], m[12], m[13], m[14]])
    );
  }
}
export function cross(m: float2, n: float2): float;
export function cross(m: float3, n: float3): float3;
export function cross(m: any, n: any): any {
  switch (m.length) {
    case 2: return det(matrix2x2(m, n));
    case 3: return [
      det([m[1], n[1], m[2], n[2]]),
      det([m[0], n[0], m[2], n[2]]),
      det([m[0], n[0], m[1], n[1]]),
    ];
  }
}