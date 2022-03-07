import {
  float, float2, float3, float4,
  matrix, matrix2x2, matrix3x3, matrix4x4,
  matrix1x2, matrix2x1, matrix3x1, matrix4x1,
  matrix1x3, matrix1x4, matrix4x3, matrix4x2, matrix2x3, matrix3x2 } from "./types";
export const TAU = Math.PI * 2;
export const radians = TAU / 360;
export const degrees = 360 / TAU;
type float234 = float2 | float3 | float4;
type float34 = float3 | float4;
export const x = (f: float234): float => f[0];
export const y = (f: float234): float => f[1];
export const z = (f: float34): float => f[2];
export const w = (f: float4): float => f[3];
export const xx = (f: float234): float2 => [f[0], f[0]];
export const xy = (f: float234): float2 => [f[0], f[1]];
export const xz = (f: float34): float2 => [f[0], f[2]];
export const xw = (f: float4): float2 => [f[0], f[3]];
export const yx = (f: float234): float2 => [f[1], f[0]];
export const yy = (f: float234): float2 => [f[1], f[1]];
export const yz = (f: float34): float2 => [f[1], f[2]];
export const yw = (f: float4): float2 => [f[1], f[3]];
export const zx = (f: float34): float2 => [f[2], f[0]];
export const zy = (f: float34): float2 => [f[2], f[1]];
export const zz = (f: float34): float2 => [f[2], f[2]];
export const zw = (f: float4): float2 => [f[2], f[3]];
export const wx = (f: float4): float2 => [f[3], f[0]];
export const wy = (f: float4): float2 => [f[3], f[1]];
export const wz = (f: float4): float2 => [f[3], f[2]];
export const ww = (f: float4): float2 => [f[3], f[3]];
export const xxx = (f: float234): float3 => [f[0], f[0], f[0]];
export const xxy = (f: float234): float3 => [f[0], f[0], f[1]];
export const xxz = (f: float34): float3 => [f[0], f[0], f[2]];
export const xxw = (f: float4): float3 => [f[0], f[0], f[3]];
export const xyx = (f: float234): float3 => [f[0], f[1], f[0]];
export const xyy = (f: float234): float3 => [f[0], f[1], f[1]];
export const xyz = (f: float34): float3 => [f[0], f[1], f[2]];
export const xyw = (f: float4): float3 => [f[0], f[1], f[3]];
export const xzx = (f: float34): float3 => [f[0], f[2], f[0]];
export const xzy = (f: float34): float3 => [f[0], f[2], f[1]];
export const xzz = (f: float34): float3 => [f[0], f[2], f[2]];
export const xzw = (f: float4): float3 => [f[0], f[2], f[3]];
export const xwx = (f: float4): float3 => [f[0], f[3], f[0]];
export const xwy = (f: float4): float3 => [f[0], f[3], f[1]];
export const xwz = (f: float4): float3 => [f[0], f[3], f[2]];
export const xww = (f: float4): float3 => [f[0], f[3], f[3]];
export const yxx = (f: float234): float3 => [f[1], f[0], f[0]];
export const yxy = (f: float234): float3 => [f[1], f[0], f[1]];
export const yxz = (f: float34): float3 => [f[1], f[0], f[2]];
export const yxw = (f: float4): float3 => [f[1], f[0], f[3]];
export const yyx = (f: float234): float3 => [f[1], f[1], f[0]];
export const yyy = (f: float234): float3 => [f[1], f[1], f[1]];
export const yyz = (f: float34): float3 => [f[1], f[1], f[2]];
export const yyw = (f: float4): float3 => [f[1], f[1], f[3]];
export const yzx = (f: float34): float3 => [f[1], f[2], f[0]];
export const yzy = (f: float34): float3 => [f[1], f[2], f[1]];
export const yzz = (f: float34): float3 => [f[1], f[2], f[2]];
export const yzw = (f: float4): float3 => [f[1], f[2], f[3]];
export const ywx = (f: float4): float3 => [f[1], f[3], f[0]];
export const ywy = (f: float4): float3 => [f[1], f[3], f[1]];
export const ywz = (f: float4): float3 => [f[1], f[3], f[2]];
export const yww = (f: float4): float3 => [f[1], f[3], f[3]];
export const zxx = (f: float34): float3 => [f[2], f[0], f[0]];
export const zxy = (f: float34): float3 => [f[2], f[0], f[1]];
export const zxz = (f: float34): float3 => [f[2], f[0], f[2]];
export const zxw = (f: float4): float3 => [f[2], f[0], f[3]];
export const zyx = (f: float34): float3 => [f[2], f[1], f[0]];
export const zyy = (f: float34): float3 => [f[2], f[1], f[1]];
export const zyz = (f: float34): float3 => [f[2], f[1], f[2]];
export const zyw = (f: float4): float3 => [f[2], f[1], f[3]];
export const zzx = (f: float34): float3 => [f[2], f[2], f[0]];
export const zzy = (f: float34): float3 => [f[2], f[2], f[1]];
export const zzz = (f: float34): float3 => [f[2], f[2], f[2]];
export const zzw = (f: float4): float3 => [f[2], f[2], f[3]];
export const zwx = (f: float4): float3 => [f[2], f[3], f[0]];
export const zwy = (f: float4): float3 => [f[2], f[3], f[1]];
export const zwz = (f: float4): float3 => [f[2], f[3], f[2]];
export const zww = (f: float4): float3 => [f[2], f[3], f[3]];
export const wxx = (f: float4): float3 => [f[3], f[0], f[0]];
export const wxy = (f: float4): float3 => [f[3], f[0], f[1]];
export const wxz = (f: float4): float3 => [f[3], f[0], f[2]];
export const wxw = (f: float4): float3 => [f[3], f[0], f[3]];
export const wyx = (f: float4): float3 => [f[3], f[1], f[0]];
export const wyy = (f: float4): float3 => [f[3], f[1], f[1]];
export const wyz = (f: float4): float3 => [f[3], f[1], f[2]];
export const wyw = (f: float4): float3 => [f[3], f[1], f[3]];
export const wzx = (f: float4): float3 => [f[3], f[2], f[0]];
export const wzy = (f: float4): float3 => [f[3], f[2], f[1]];
export const wzz = (f: float4): float3 => [f[3], f[2], f[2]];
export const wzw = (f: float4): float3 => [f[3], f[2], f[3]];
export const wwx = (f: float4): float3 => [f[3], f[3], f[0]];
export const wwy = (f: float4): float3 => [f[3], f[3], f[1]];
export const wwz = (f: float4): float3 => [f[3], f[3], f[2]];
export const www = (f: float4): float3 => [f[3], f[3], f[3]];
export const xxxx = (f: float234): float4 => [f[0], f[0], f[0], f[0]];
export const xxxy = (f: float234): float4 => [f[0], f[0], f[0], f[1]];
export const xxxz = (f: float34): float4 => [f[0], f[0], f[0], f[2]];
export const xxxw = (f: float4): float4 => [f[0], f[0], f[0], f[3]];
export const xxyx = (f: float234): float4 => [f[0], f[0], f[1], f[0]];
export const xxyy = (f: float234): float4 => [f[0], f[0], f[1], f[1]];
export const xxyz = (f: float34): float4 => [f[0], f[0], f[1], f[2]];
export const xxyw = (f: float4): float4 => [f[0], f[0], f[1], f[3]];
export const xxzx = (f: float34): float4 => [f[0], f[0], f[2], f[0]];
export const xxzy = (f: float34): float4 => [f[0], f[0], f[2], f[1]];
export const xxzz = (f: float34): float4 => [f[0], f[0], f[2], f[2]];
export const xxzw = (f: float4): float4 => [f[0], f[0], f[2], f[3]];
export const xxwx = (f: float4): float4 => [f[0], f[0], f[3], f[0]];
export const xxwy = (f: float4): float4 => [f[0], f[0], f[3], f[1]];
export const xxwz = (f: float4): float4 => [f[0], f[0], f[3], f[2]];
export const xxww = (f: float4): float4 => [f[0], f[0], f[3], f[3]];
export const xyxx = (f: float234): float4 => [f[0], f[1], f[0], f[0]];
export const xyxy = (f: float234): float4 => [f[0], f[1], f[0], f[1]];
export const xyxz = (f: float34): float4 => [f[0], f[1], f[0], f[2]];
export const xyxw = (f: float4): float4 => [f[0], f[1], f[0], f[3]];
export const xyyx = (f: float234): float4 => [f[0], f[1], f[1], f[0]];
export const xyyy = (f: float234): float4 => [f[0], f[1], f[1], f[1]];
export const xyyz = (f: float34): float4 => [f[0], f[1], f[1], f[2]];
export const xyyw = (f: float4): float4 => [f[0], f[1], f[1], f[3]];
export const xyzx = (f: float34): float4 => [f[0], f[1], f[2], f[0]];
export const xyzy = (f: float34): float4 => [f[0], f[1], f[2], f[1]];
export const xyzz = (f: float34): float4 => [f[0], f[1], f[2], f[2]];
export const xyzw = (f: float4): float4 => [f[0], f[1], f[2], f[3]];
export const xywx = (f: float4): float4 => [f[0], f[1], f[3], f[0]];
export const xywy = (f: float4): float4 => [f[0], f[1], f[3], f[1]];
export const xywz = (f: float4): float4 => [f[0], f[1], f[3], f[2]];
export const xyww = (f: float4): float4 => [f[0], f[1], f[3], f[3]];
export const xzxx = (f: float34): float4 => [f[0], f[2], f[0], f[0]];
export const xzxy = (f: float34): float4 => [f[0], f[2], f[0], f[1]];
export const xzxz = (f: float34): float4 => [f[0], f[2], f[0], f[2]];
export const xzxw = (f: float4): float4 => [f[0], f[2], f[0], f[3]];
export const xzyx = (f: float34): float4 => [f[0], f[2], f[1], f[0]];
export const xzyy = (f: float34): float4 => [f[0], f[2], f[1], f[1]];
export const xzyz = (f: float34): float4 => [f[0], f[2], f[1], f[2]];
export const xzyw = (f: float4): float4 => [f[0], f[2], f[1], f[3]];
export const xzzx = (f: float34): float4 => [f[0], f[2], f[2], f[0]];
export const xzzy = (f: float34): float4 => [f[0], f[2], f[2], f[1]];
export const xzzz = (f: float34): float4 => [f[0], f[2], f[2], f[2]];
export const xzzw = (f: float4): float4 => [f[0], f[2], f[2], f[3]];
export const xzwx = (f: float4): float4 => [f[0], f[2], f[3], f[0]];
export const xzwy = (f: float4): float4 => [f[0], f[2], f[3], f[1]];
export const xzwz = (f: float4): float4 => [f[0], f[2], f[3], f[2]];
export const xzww = (f: float4): float4 => [f[0], f[2], f[3], f[3]];
export const xwxx = (f: float4): float4 => [f[0], f[3], f[0], f[0]];
export const xwxy = (f: float4): float4 => [f[0], f[3], f[0], f[1]];
export const xwxz = (f: float4): float4 => [f[0], f[3], f[0], f[2]];
export const xwxw = (f: float4): float4 => [f[0], f[3], f[0], f[3]];
export const xwyx = (f: float4): float4 => [f[0], f[3], f[1], f[0]];
export const xwyy = (f: float4): float4 => [f[0], f[3], f[1], f[1]];
export const xwyz = (f: float4): float4 => [f[0], f[3], f[1], f[2]];
export const xwyw = (f: float4): float4 => [f[0], f[3], f[1], f[3]];
export const xwzx = (f: float4): float4 => [f[0], f[3], f[2], f[0]];
export const xwzy = (f: float4): float4 => [f[0], f[3], f[2], f[1]];
export const xwzz = (f: float4): float4 => [f[0], f[3], f[2], f[2]];
export const xwzw = (f: float4): float4 => [f[0], f[3], f[2], f[3]];
export const xwwx = (f: float4): float4 => [f[0], f[3], f[3], f[0]];
export const xwwy = (f: float4): float4 => [f[0], f[3], f[3], f[1]];
export const xwwz = (f: float4): float4 => [f[0], f[3], f[3], f[2]];
export const xwww = (f: float4): float4 => [f[0], f[3], f[3], f[3]];
export const yxxx = (f: float234): float4 => [f[1], f[0], f[0], f[0]];
export const yxxy = (f: float234): float4 => [f[1], f[0], f[0], f[1]];
export const yxxz = (f: float34): float4 => [f[1], f[0], f[0], f[2]];
export const yxxw = (f: float4): float4 => [f[1], f[0], f[0], f[3]];
export const yxyx = (f: float234): float4 => [f[1], f[0], f[1], f[0]];
export const yxyy = (f: float234): float4 => [f[1], f[0], f[1], f[1]];
export const yxyz = (f: float34): float4 => [f[1], f[0], f[1], f[2]];
export const yxyw = (f: float4): float4 => [f[1], f[0], f[1], f[3]];
export const yxzx = (f: float34): float4 => [f[1], f[0], f[2], f[0]];
export const yxzy = (f: float34): float4 => [f[1], f[0], f[2], f[1]];
export const yxzz = (f: float34): float4 => [f[1], f[0], f[2], f[2]];
export const yxzw = (f: float4): float4 => [f[1], f[0], f[2], f[3]];
export const yxwx = (f: float4): float4 => [f[1], f[0], f[3], f[0]];
export const yxwy = (f: float4): float4 => [f[1], f[0], f[3], f[1]];
export const yxwz = (f: float4): float4 => [f[1], f[0], f[3], f[2]];
export const yxww = (f: float4): float4 => [f[1], f[0], f[3], f[3]];
export const yyxx = (f: float234): float4 => [f[1], f[1], f[0], f[0]];
export const yyxy = (f: float234): float4 => [f[1], f[1], f[0], f[1]];
export const yyxz = (f: float34): float4 => [f[1], f[1], f[0], f[2]];
export const yyxw = (f: float4): float4 => [f[1], f[1], f[0], f[3]];
export const yyyx = (f: float234): float4 => [f[1], f[1], f[1], f[0]];
export const yyyy = (f: float234): float4 => [f[1], f[1], f[1], f[1]];
export const yyyz = (f: float34): float4 => [f[1], f[1], f[1], f[2]];
export const yyyw = (f: float4): float4 => [f[1], f[1], f[1], f[3]];
export const yyzx = (f: float34): float4 => [f[1], f[1], f[2], f[0]];
export const yyzy = (f: float34): float4 => [f[1], f[1], f[2], f[1]];
export const yyzz = (f: float34): float4 => [f[1], f[1], f[2], f[2]];
export const yyzw = (f: float4): float4 => [f[1], f[1], f[2], f[3]];
export const yywx = (f: float4): float4 => [f[1], f[1], f[3], f[0]];
export const yywy = (f: float4): float4 => [f[1], f[1], f[3], f[1]];
export const yywz = (f: float4): float4 => [f[1], f[1], f[3], f[2]];
export const yyww = (f: float4): float4 => [f[1], f[1], f[3], f[3]];
export const yzxx = (f: float34): float4 => [f[1], f[2], f[0], f[0]];
export const yzxy = (f: float34): float4 => [f[1], f[2], f[0], f[1]];
export const yzxz = (f: float34): float4 => [f[1], f[2], f[0], f[2]];
export const yzxw = (f: float4): float4 => [f[1], f[2], f[0], f[3]];
export const yzyx = (f: float34): float4 => [f[1], f[2], f[1], f[0]];
export const yzyy = (f: float34): float4 => [f[1], f[2], f[1], f[1]];
export const yzyz = (f: float34): float4 => [f[1], f[2], f[1], f[2]];
export const yzyw = (f: float4): float4 => [f[1], f[2], f[1], f[3]];
export const yzzx = (f: float34): float4 => [f[1], f[2], f[2], f[0]];
export const yzzy = (f: float34): float4 => [f[1], f[2], f[2], f[1]];
export const yzzz = (f: float34): float4 => [f[1], f[2], f[2], f[2]];
export const yzzw = (f: float4): float4 => [f[1], f[2], f[2], f[3]];
export const yzwx = (f: float4): float4 => [f[1], f[2], f[3], f[0]];
export const yzwy = (f: float4): float4 => [f[1], f[2], f[3], f[1]];
export const yzwz = (f: float4): float4 => [f[1], f[2], f[3], f[2]];
export const yzww = (f: float4): float4 => [f[1], f[2], f[3], f[3]];
export const ywxx = (f: float4): float4 => [f[1], f[3], f[0], f[0]];
export const ywxy = (f: float4): float4 => [f[1], f[3], f[0], f[1]];
export const ywxz = (f: float4): float4 => [f[1], f[3], f[0], f[2]];
export const ywxw = (f: float4): float4 => [f[1], f[3], f[0], f[3]];
export const ywyx = (f: float4): float4 => [f[1], f[3], f[1], f[0]];
export const ywyy = (f: float4): float4 => [f[1], f[3], f[1], f[1]];
export const ywyz = (f: float4): float4 => [f[1], f[3], f[1], f[2]];
export const ywyw = (f: float4): float4 => [f[1], f[3], f[1], f[3]];
export const ywzx = (f: float4): float4 => [f[1], f[3], f[2], f[0]];
export const ywzy = (f: float4): float4 => [f[1], f[3], f[2], f[1]];
export const ywzz = (f: float4): float4 => [f[1], f[3], f[2], f[2]];
export const ywzw = (f: float4): float4 => [f[1], f[3], f[2], f[3]];
export const ywwx = (f: float4): float4 => [f[1], f[3], f[3], f[0]];
export const ywwy = (f: float4): float4 => [f[1], f[3], f[3], f[1]];
export const ywwz = (f: float4): float4 => [f[1], f[3], f[3], f[2]];
export const ywww = (f: float4): float4 => [f[1], f[3], f[3], f[3]];
export const zxxx = (f: float34): float4 => [f[2], f[0], f[0], f[0]];
export const zxxy = (f: float34): float4 => [f[2], f[0], f[0], f[1]];
export const zxxz = (f: float34): float4 => [f[2], f[0], f[0], f[2]];
export const zxxw = (f: float4): float4 => [f[2], f[0], f[0], f[3]];
export const zxyx = (f: float34): float4 => [f[2], f[0], f[1], f[0]];
export const zxyy = (f: float34): float4 => [f[2], f[0], f[1], f[1]];
export const zxyz = (f: float34): float4 => [f[2], f[0], f[1], f[2]];
export const zxyw = (f: float4): float4 => [f[2], f[0], f[1], f[3]];
export const zxzx = (f: float34): float4 => [f[2], f[0], f[2], f[0]];
export const zxzy = (f: float34): float4 => [f[2], f[0], f[2], f[1]];
export const zxzz = (f: float34): float4 => [f[2], f[0], f[2], f[2]];
export const zxzw = (f: float4): float4 => [f[2], f[0], f[2], f[3]];
export const zxwx = (f: float4): float4 => [f[2], f[0], f[3], f[0]];
export const zxwy = (f: float4): float4 => [f[2], f[0], f[3], f[1]];
export const zxwz = (f: float4): float4 => [f[2], f[0], f[3], f[2]];
export const zxww = (f: float4): float4 => [f[2], f[0], f[3], f[3]];
export const zyxx = (f: float34): float4 => [f[2], f[1], f[0], f[0]];
export const zyxy = (f: float34): float4 => [f[2], f[1], f[0], f[1]];
export const zyxz = (f: float34): float4 => [f[2], f[1], f[0], f[2]];
export const zyxw = (f: float4): float4 => [f[2], f[1], f[0], f[3]];
export const zyyx = (f: float34): float4 => [f[2], f[1], f[1], f[0]];
export const zyyy = (f: float34): float4 => [f[2], f[1], f[1], f[1]];
export const zyyz = (f: float34): float4 => [f[2], f[1], f[1], f[2]];
export const zyyw = (f: float4): float4 => [f[2], f[1], f[1], f[3]];
export const zyzx = (f: float34): float4 => [f[2], f[1], f[2], f[0]];
export const zyzy = (f: float34): float4 => [f[2], f[1], f[2], f[1]];
export const zyzz = (f: float34): float4 => [f[2], f[1], f[2], f[2]];
export const zyzw = (f: float4): float4 => [f[2], f[1], f[2], f[3]];
export const zywx = (f: float4): float4 => [f[2], f[1], f[3], f[0]];
export const zywy = (f: float4): float4 => [f[2], f[1], f[3], f[1]];
export const zywz = (f: float4): float4 => [f[2], f[1], f[3], f[2]];
export const zyww = (f: float4): float4 => [f[2], f[1], f[3], f[3]];
export const zzxx = (f: float34): float4 => [f[2], f[2], f[0], f[0]];
export const zzxy = (f: float34): float4 => [f[2], f[2], f[0], f[1]];
export const zzxz = (f: float34): float4 => [f[2], f[2], f[0], f[2]];
export const zzxw = (f: float4): float4 => [f[2], f[2], f[0], f[3]];
export const zzyx = (f: float34): float4 => [f[2], f[2], f[1], f[0]];
export const zzyy = (f: float34): float4 => [f[2], f[2], f[1], f[1]];
export const zzyz = (f: float34): float4 => [f[2], f[2], f[1], f[2]];
export const zzyw = (f: float4): float4 => [f[2], f[2], f[1], f[3]];
export const zzzx = (f: float34): float4 => [f[2], f[2], f[2], f[0]];
export const zzzy = (f: float34): float4 => [f[2], f[2], f[2], f[1]];
export const zzzz = (f: float34): float4 => [f[2], f[2], f[2], f[2]];
export const zzzw = (f: float4): float4 => [f[2], f[2], f[2], f[3]];
export const zzwx = (f: float4): float4 => [f[2], f[2], f[3], f[0]];
export const zzwy = (f: float4): float4 => [f[2], f[2], f[3], f[1]];
export const zzwz = (f: float4): float4 => [f[2], f[2], f[3], f[2]];
export const zzww = (f: float4): float4 => [f[2], f[2], f[3], f[3]];
export const zwxx = (f: float4): float4 => [f[2], f[3], f[0], f[0]];
export const zwxy = (f: float4): float4 => [f[2], f[3], f[0], f[1]];
export const zwxz = (f: float4): float4 => [f[2], f[3], f[0], f[2]];
export const zwxw = (f: float4): float4 => [f[2], f[3], f[0], f[3]];
export const zwyx = (f: float4): float4 => [f[2], f[3], f[1], f[0]];
export const zwyy = (f: float4): float4 => [f[2], f[3], f[1], f[1]];
export const zwyz = (f: float4): float4 => [f[2], f[3], f[1], f[2]];
export const zwyw = (f: float4): float4 => [f[2], f[3], f[1], f[3]];
export const zwzx = (f: float4): float4 => [f[2], f[3], f[2], f[0]];
export const zwzy = (f: float4): float4 => [f[2], f[3], f[2], f[1]];
export const zwzz = (f: float4): float4 => [f[2], f[3], f[2], f[2]];
export const zwzw = (f: float4): float4 => [f[2], f[3], f[2], f[3]];
export const zwwx = (f: float4): float4 => [f[2], f[3], f[3], f[0]];
export const zwwy = (f: float4): float4 => [f[2], f[3], f[3], f[1]];
export const zwwz = (f: float4): float4 => [f[2], f[3], f[3], f[2]];
export const zwww = (f: float4): float4 => [f[2], f[3], f[3], f[3]];
export const wxxx = (f: float4): float4 => [f[3], f[0], f[0], f[0]];
export const wxxy = (f: float4): float4 => [f[3], f[0], f[0], f[1]];
export const wxxz = (f: float4): float4 => [f[3], f[0], f[0], f[2]];
export const wxxw = (f: float4): float4 => [f[3], f[0], f[0], f[3]];
export const wxyx = (f: float4): float4 => [f[3], f[0], f[1], f[0]];
export const wxyy = (f: float4): float4 => [f[3], f[0], f[1], f[1]];
export const wxyz = (f: float4): float4 => [f[3], f[0], f[1], f[2]];
export const wxyw = (f: float4): float4 => [f[3], f[0], f[1], f[3]];
export const wxzx = (f: float4): float4 => [f[3], f[0], f[2], f[0]];
export const wxzy = (f: float4): float4 => [f[3], f[0], f[2], f[1]];
export const wxzz = (f: float4): float4 => [f[3], f[0], f[2], f[2]];
export const wxzw = (f: float4): float4 => [f[3], f[0], f[2], f[3]];
export const wxwx = (f: float4): float4 => [f[3], f[0], f[3], f[0]];
export const wxwy = (f: float4): float4 => [f[3], f[0], f[3], f[1]];
export const wxwz = (f: float4): float4 => [f[3], f[0], f[3], f[2]];
export const wxww = (f: float4): float4 => [f[3], f[0], f[3], f[3]];
export const wyxx = (f: float4): float4 => [f[3], f[1], f[0], f[0]];
export const wyxy = (f: float4): float4 => [f[3], f[1], f[0], f[1]];
export const wyxz = (f: float4): float4 => [f[3], f[1], f[0], f[2]];
export const wyxw = (f: float4): float4 => [f[3], f[1], f[0], f[3]];
export const wyyx = (f: float4): float4 => [f[3], f[1], f[1], f[0]];
export const wyyy = (f: float4): float4 => [f[3], f[1], f[1], f[1]];
export const wyyz = (f: float4): float4 => [f[3], f[1], f[1], f[2]];
export const wyyw = (f: float4): float4 => [f[3], f[1], f[1], f[3]];
export const wyzx = (f: float4): float4 => [f[3], f[1], f[2], f[0]];
export const wyzy = (f: float4): float4 => [f[3], f[1], f[2], f[1]];
export const wyzz = (f: float4): float4 => [f[3], f[1], f[2], f[2]];
export const wyzw = (f: float4): float4 => [f[3], f[1], f[2], f[3]];
export const wywx = (f: float4): float4 => [f[3], f[1], f[3], f[0]];
export const wywy = (f: float4): float4 => [f[3], f[1], f[3], f[1]];
export const wywz = (f: float4): float4 => [f[3], f[1], f[3], f[2]];
export const wyww = (f: float4): float4 => [f[3], f[1], f[3], f[3]];
export const wzxx = (f: float4): float4 => [f[3], f[2], f[0], f[0]];
export const wzxy = (f: float4): float4 => [f[3], f[2], f[0], f[1]];
export const wzxz = (f: float4): float4 => [f[3], f[2], f[0], f[2]];
export const wzxw = (f: float4): float4 => [f[3], f[2], f[0], f[3]];
export const wzyx = (f: float4): float4 => [f[3], f[2], f[1], f[0]];
export const wzyy = (f: float4): float4 => [f[3], f[2], f[1], f[1]];
export const wzyz = (f: float4): float4 => [f[3], f[2], f[1], f[2]];
export const wzyw = (f: float4): float4 => [f[3], f[2], f[1], f[3]];
export const wzzx = (f: float4): float4 => [f[3], f[2], f[2], f[0]];
export const wzzy = (f: float4): float4 => [f[3], f[2], f[2], f[1]];
export const wzzz = (f: float4): float4 => [f[3], f[2], f[2], f[2]];
export const wzzw = (f: float4): float4 => [f[3], f[2], f[2], f[3]];
export const wzwx = (f: float4): float4 => [f[3], f[2], f[3], f[0]];
export const wzwy = (f: float4): float4 => [f[3], f[2], f[3], f[1]];
export const wzwz = (f: float4): float4 => [f[3], f[2], f[3], f[2]];
export const wzww = (f: float4): float4 => [f[3], f[2], f[3], f[3]];
export const wwxx = (f: float4): float4 => [f[3], f[3], f[0], f[0]];
export const wwxy = (f: float4): float4 => [f[3], f[3], f[0], f[1]];
export const wwxz = (f: float4): float4 => [f[3], f[3], f[0], f[2]];
export const wwxw = (f: float4): float4 => [f[3], f[3], f[0], f[3]];
export const wwyx = (f: float4): float4 => [f[3], f[3], f[1], f[0]];
export const wwyy = (f: float4): float4 => [f[3], f[3], f[1], f[1]];
export const wwyz = (f: float4): float4 => [f[3], f[3], f[1], f[2]];
export const wwyw = (f: float4): float4 => [f[3], f[3], f[1], f[3]];
export const wwzx = (f: float4): float4 => [f[3], f[3], f[2], f[0]];
export const wwzy = (f: float4): float4 => [f[3], f[3], f[2], f[1]];
export const wwzz = (f: float4): float4 => [f[3], f[3], f[2], f[2]];
export const wwzw = (f: float4): float4 => [f[3], f[3], f[2], f[3]];
export const wwwx = (f: float4): float4 => [f[3], f[3], f[3], f[0]];
export const wwwy = (f: float4): float4 => [f[3], f[3], f[3], f[1]];
export const wwwz = (f: float4): float4 => [f[3], f[3], f[3], f[2]];
export const wwww = (f: float4): float4 => [f[3], f[3], f[3], f[3]];
export const add22 = (f0: float2, f1: float2): float2 => [f0[0] + f1[0], f0[1] + f1[1]];
export const add33 = (f0: float3, f1: float3): float3 => [f0[0] + f1[0], f0[1] + f1[1], f0[2] + f1[2]];
export const add44 = (f0: float4, f1: float4): float4 => [f0[0] + f1[0], f0[1] + f1[1], f0[2] + f1[2], f0[3] + f1[3]];
export const sub22 = (f0: float2, f1: float2): float2 => [f0[0] - f1[0], f0[1] - f1[1]];
export const sub33 = (f0: float3, f1: float3): float3 => [f0[0] - f1[0], f0[1] - f1[1], f0[2] - f1[2]];
export const sub44 = (f0: float4, f1: float4): float4 => [f0[0] - f1[0], f0[1] - f1[1], f0[2] - f1[2], f0[3] - f1[3]];
export const mul12 = (s: float, f: float2): float2 => [s * f[0], s * f[1]];
export const mul13 = (s: float, f: float3): float3 => [s * f[0], s * f[1], s * f[2]];
export const mul14 = (s: float, f: float4): float4 => [s * f[0], s * f[1], s * f[2], s * f[3]];
export const mul22 = (f0: float2, f1: float2): float2 => [f0[0] * f1[0], f0[1] * f1[1]];
export const mul33 = (f0: float3, f1: float3): float3 => [f0[0] * f1[0], f0[1] * f1[1], f0[2] * f1[2]];
export const mul44 = (f0: float4, f1: float4): float4 => [f0[0] * f1[0], f0[1] * f1[1], f0[2] * f1[2], f0[3] * f1[3]];
export const div12 = (s: float, f: float2): float2 => [s / f[0], s / f[1]];
export const div13 = (s: float, f: float3): float3 => [s / f[0], s / f[1], s / f[2]];
export const div14 = (s: float, f: float4): float4 => [s / f[0], s / f[1], s / f[2], s / f[3]];
export const div22 = (f0: float2, f1: float2): float2 => [f0[0] / f1[0], f0[1] / f1[1]];
export const div33 = (f0: float3, f1: float3): float3 => [f0[0] / f1[0], f0[1] / f1[1], f0[2] / f1[2]];
export const div44 = (f0: float4, f1: float4): float4 => [f0[0] / f1[0], f0[1] / f1[1], f0[2] / f1[2], f0[3] / f1[3]];
export const dot22 = (f0: float2, f1: float2): float => f0[0] * f1[0] + f0[1] * f1[1];
export const dot33 = (f0: float3, f1: float3): float => f0[0] * f1[0] + f0[1] * f1[1] + f0[2] * f1[2];
export const dot44 = (f0: float4, f1: float4): float => f0[0] * f1[0] + f0[1] * f1[1] + f0[2] * f1[2] + f0[3] * f1[3];
export const transpose1x2 = (m: matrix1x2): matrix2x1 => [[m[0], m[1]]];
export const transpose1x3 = (m: matrix1x3): matrix3x1 => [[m[0], m[1], m[2]]];
export const transpose1x4 = (m: matrix1x4): matrix4x1 => [[m[0], m[1], m[2], m[3]]];
export const transpose2x2 = (m: matrix2x2): matrix2x2 => [[m[0][0], m[1][0]], [m[0][1], m[1][1]]];
export const transpose2x3 = (m: matrix2x3): matrix3x2 => [
  [m[0][0], m[1][0], m[2][0]],
  [m[0][1], m[1][1], m[2][1]],
];
export const transpose3x3 = (m: matrix3x3): matrix3x3 => [
  [m[0][0], m[1][0], m[2][0]],
  [m[0][1], m[1][1], m[2][1]],
  [m[0][2], m[1][2], m[2][2]]
];
export const transpose4x4 = (m: matrix4x4): matrix4x4 => [
  [m[0][0], m[1][0], m[2][0], m[3][0]],
  [m[0][1], m[1][1], m[2][1], m[3][1]],
  [m[0][2], m[1][2], m[2][2], m[3][2]],
  [m[0][3], m[1][3], m[2][3], m[3][3]]
];
export const addm = <M extends matrix>(m0: M, m1: M): M => {
  const m: any = [];
  m0.forEach((c, i) => {
    if (typeof c === "number")
      m[i] = (c as float) + (m1[i] as float);
    else {
      m.push([]);
      c.forEach((e, j) => {
        m[i][j] = e + (m1 as any)[i][j];
      });
    }
  });
  return m as M;
};
export const subm = <M extends matrix>(m0: M, m1: M): M => {
  const m: any = [];
  m0.forEach((c, i) => {
    if (typeof c === "number")
      m[i] = (c as float) + (m1[i] as float);
    else {
      m.push([]);
      c.forEach((e, j) => {
        m[i][j] = e - (m1 as any)[i][j];
      });
    }
  });
  return m as M;
};
export const mul4x4x1 = (m0: matrix4x4, m1: matrix4x1): matrix4x1 => {
  const [r0, r1, r2, r3] = transpose4x4(m0);
  const [c0] = m1;
  const dot = dot44;
  return [
    [dot(r0, c0), dot(r1, c0), dot(r2, c0), dot(r3, c0)]
  ];
}
export const mul4x4x2 = (m0: matrix4x4, m1: matrix4x2): matrix4x2 => {
  const [r0, r1, r2, r3] = transpose4x4(m0);
  const [c0, c1] = m1;
  const dot = dot44;

  return [
    [dot(r0, c0), dot(r1, c0), dot(r2, c0), dot(r3, c0)],
    [dot(r0, c1), dot(r1, c1), dot(r2, c1), dot(r3, c1)]
  ];
};
export const mul4x4x3 = (m0: matrix4x4, m1: matrix4x3): matrix4x3 => {
  const [r0, r1, r2, r3] = transpose4x4(m0);
  const [c0, c1, c2] = m1;
  const dot = dot44;

  return [
    [dot(r0, c0), dot(r1, c0), dot(r2, c0), dot(r3, c0)],
    [dot(r0, c1), dot(r1, c1), dot(r2, c1), dot(r3, c1)],
    [dot(r0, c2), dot(r1, c2), dot(r2, c2), dot(r3, c2)]
  ];
};
export const mul4x4x4 = (m0: matrix4x4, m1: matrix4x4): matrix4x4 => {
  const [r0, r1, r2, r3] = transpose4x4(m0);
  const [c0, c1, c2, c3] = m1;
  const dot = dot44;

  return [
    [dot(r0, c0), dot(r1, c0), dot(r2, c0), dot(r3, c0)],
    [dot(r0, c1), dot(r1, c1), dot(r2, c1), dot(r3, c1)],
    [dot(r0, c2), dot(r1, c2), dot(r2, c2), dot(r3, c2)],
    [dot(r0, c3), dot(r1, c3), dot(r2, c3), dot(r3, c3)]
  ];
};
export const det22 = (m: matrix2x2): float => {
  const [c0, c1] = m;
  const [a, c] = c0;
  const [b, d] = c1;
  return a * d - b * c;
};
export const det33 = (m: matrix3x3): float => {
  const [c0, c1, c2] = m;
  const [a, d, g] = c0;
  const [b, e, h] = c1;
  const [c, f, i] = c2;
  /**
   * a b c
   * d e f
   * g h i
   */
  const m00 = e * i - f * h;
  const m01 = d * i - f * g;
  const m02 = d * h - e * g;
  return a * m00 - b * m01 + c * m02;
}
export const det44 = (m: matrix4x4): float => {
  const [c0, c1, c2, c3] = m;
  const [a, ...e] = c0;
  const [b, ...f] = c1;
  const [c, ...g] = c2;
  const [d, ...h] = c3;
  const m00 = det33([f, g, h]);
  const m01 = det33([e, g, h]);
  const m02 = det33([e, f, h]);
  const m03 = det33([e, f, g]);
  return a * m00 - b * m01 + c * m02 - d * m03;
}
export const cross22 = (f0: float2, f1: float2) => {
  const [a, c] = f0;
  const [b, d] = f1;
  return a * d - b * c;
};
export const cross33 = (f0: float3, f1: float3): float3 => yzx(sub33(mul33(f0, yzx(f1)), mul33(yzx(f0), f1)));
export const sin = (f: float): float => Math.sin(f);
export const sin2 = (f: float2): float2 => [Math.sin(f[0]), Math.sin(f[1])];
export const sin3 = (f: float3): float3 => [Math.sin(f[0]), Math.sin(f[1]), Math.sin(f[2])];
export const sin4 = (f: float4): float4 => [Math.sin(f[0]), Math.sin(f[1]), Math.sin(f[2]), Math.sin(f[3])];
export const cos = (f: float): float => Math.cos(f);
export const cos2 = (f: float2): float2 => [Math.cos(f[0]), Math.cos(f[1])];
export const cos3 = (f: float3): float3 => [Math.cos(f[0]), Math.cos(f[1]), Math.cos(f[2])];
export const cos4 = (f: float4): float4 => [Math.cos(f[0]), Math.cos(f[1]), Math.cos(f[2]), Math.cos(f[3])];
export const sincos = (f: float): [float, float] => [sin(f), cos(f)];
export const sincos2 = (f: float2): [float2, float2] => [sin2(f), cos2(f)];
export const sincos3 = (f: float3): [float3, float3] => [sin3(f), cos3(f)];
export const sincos4 = (f: float4): [float4, float4] => [sin4(f), cos4(f)];
export const normalize = (f: float): float => f === 0 ? 0 : f > 0 ? 1 : 0;
export const normalize2 = (f: float2): float2 => mul12(1/Math.sqrt(dot22(f, f)), f);
export const normalize3 = (f: float3): float3 => mul13(1/Math.sqrt(dot33(f, f)), f);
export const normalize4 = (f: float4): float4 => mul14(1/Math.sqrt(dot44(f, f)), f);
export const length2 = (f: float2): float => Math.sqrt(dot22(f, f));
export const length3 = (f: float3): float => Math.sqrt(dot33(f, f));
export const length4 = (f: float4): float => Math.sqrt(dot44(f, f));