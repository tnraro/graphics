export * from "./constant";
import {
  floats, float, float2, float3, float4,
  matrix, matrix2x2, matrix3x3, matrix4x4,
  matrix1x2, matrix2x1, matrix3x1, matrix4x1,
  matrix1x3, matrix1x4, matrix4x3, matrix4x2, matrix2x3, matrix3x2 } from "./header";
export const x = (f: floats): float => f[0];
export const y = (f: floats): float => f[1];
export const z = (f: floats): float => f[2];
export const w = (f: floats): float => f[3];
export const xx = (f: floats): float2 => [f[0], f[0]];
export const xy = (f: floats): float2 => [f[0], f[1]];
export const xz = (f: floats): float2 => [f[0], f[2]];
export const xw = (f: floats): float2 => [f[0], f[3]];
export const yx = (f: floats): float2 => [f[1], f[0]];
export const yy = (f: floats): float2 => [f[1], f[1]];
export const yz = (f: floats): float2 => [f[1], f[2]];
export const yw = (f: floats): float2 => [f[1], f[3]];
export const zx = (f: floats): float2 => [f[2], f[0]];
export const zy = (f: floats): float2 => [f[2], f[1]];
export const zz = (f: floats): float2 => [f[2], f[2]];
export const zw = (f: floats): float2 => [f[2], f[3]];
export const wx = (f: floats): float2 => [f[3], f[0]];
export const wy = (f: floats): float2 => [f[3], f[1]];
export const wz = (f: floats): float2 => [f[3], f[2]];
export const ww = (f: floats): float2 => [f[3], f[3]];
export const xxx = (f: floats): float3 => [f[0], f[0], f[0]];
export const xxy = (f: floats): float3 => [f[0], f[0], f[1]];
export const xxz = (f: floats): float3 => [f[0], f[0], f[2]];
export const xxw = (f: floats): float3 => [f[0], f[0], f[3]];
export const xyx = (f: floats): float3 => [f[0], f[1], f[0]];
export const xyy = (f: floats): float3 => [f[0], f[1], f[1]];
export const xyz = (f: floats): float3 => [f[0], f[1], f[2]];
export const xyw = (f: floats): float3 => [f[0], f[1], f[3]];
export const xzx = (f: floats): float3 => [f[0], f[2], f[0]];
export const xzy = (f: floats): float3 => [f[0], f[2], f[1]];
export const xzz = (f: floats): float3 => [f[0], f[2], f[2]];
export const xzw = (f: floats): float3 => [f[0], f[2], f[3]];
export const xwx = (f: floats): float3 => [f[0], f[3], f[0]];
export const xwy = (f: floats): float3 => [f[0], f[3], f[1]];
export const xwz = (f: floats): float3 => [f[0], f[3], f[2]];
export const xww = (f: floats): float3 => [f[0], f[3], f[3]];
export const yxx = (f: floats): float3 => [f[1], f[0], f[0]];
export const yxy = (f: floats): float3 => [f[1], f[0], f[1]];
export const yxz = (f: floats): float3 => [f[1], f[0], f[2]];
export const yxw = (f: floats): float3 => [f[1], f[0], f[3]];
export const yyx = (f: floats): float3 => [f[1], f[1], f[0]];
export const yyy = (f: floats): float3 => [f[1], f[1], f[1]];
export const yyz = (f: floats): float3 => [f[1], f[1], f[2]];
export const yyw = (f: floats): float3 => [f[1], f[1], f[3]];
export const yzx = (f: floats): float3 => [f[1], f[2], f[0]];
export const yzy = (f: floats): float3 => [f[1], f[2], f[1]];
export const yzz = (f: floats): float3 => [f[1], f[2], f[2]];
export const yzw = (f: floats): float3 => [f[1], f[2], f[3]];
export const ywx = (f: floats): float3 => [f[1], f[3], f[0]];
export const ywy = (f: floats): float3 => [f[1], f[3], f[1]];
export const ywz = (f: floats): float3 => [f[1], f[3], f[2]];
export const yww = (f: floats): float3 => [f[1], f[3], f[3]];
export const zxx = (f: floats): float3 => [f[2], f[0], f[0]];
export const zxy = (f: floats): float3 => [f[2], f[0], f[1]];
export const zxz = (f: floats): float3 => [f[2], f[0], f[2]];
export const zxw = (f: floats): float3 => [f[2], f[0], f[3]];
export const zyx = (f: floats): float3 => [f[2], f[1], f[0]];
export const zyy = (f: floats): float3 => [f[2], f[1], f[1]];
export const zyz = (f: floats): float3 => [f[2], f[1], f[2]];
export const zyw = (f: floats): float3 => [f[2], f[1], f[3]];
export const zzx = (f: floats): float3 => [f[2], f[2], f[0]];
export const zzy = (f: floats): float3 => [f[2], f[2], f[1]];
export const zzz = (f: floats): float3 => [f[2], f[2], f[2]];
export const zzw = (f: floats): float3 => [f[2], f[2], f[3]];
export const zwx = (f: floats): float3 => [f[2], f[3], f[0]];
export const zwy = (f: floats): float3 => [f[2], f[3], f[1]];
export const zwz = (f: floats): float3 => [f[2], f[3], f[2]];
export const zww = (f: floats): float3 => [f[2], f[3], f[3]];
export const wxx = (f: floats): float3 => [f[3], f[0], f[0]];
export const wxy = (f: floats): float3 => [f[3], f[0], f[1]];
export const wxz = (f: floats): float3 => [f[3], f[0], f[2]];
export const wxw = (f: floats): float3 => [f[3], f[0], f[3]];
export const wyx = (f: floats): float3 => [f[3], f[1], f[0]];
export const wyy = (f: floats): float3 => [f[3], f[1], f[1]];
export const wyz = (f: floats): float3 => [f[3], f[1], f[2]];
export const wyw = (f: floats): float3 => [f[3], f[1], f[3]];
export const wzx = (f: floats): float3 => [f[3], f[2], f[0]];
export const wzy = (f: floats): float3 => [f[3], f[2], f[1]];
export const wzz = (f: floats): float3 => [f[3], f[2], f[2]];
export const wzw = (f: floats): float3 => [f[3], f[2], f[3]];
export const wwx = (f: floats): float3 => [f[3], f[3], f[0]];
export const wwy = (f: floats): float3 => [f[3], f[3], f[1]];
export const wwz = (f: floats): float3 => [f[3], f[3], f[2]];
export const www = (f: floats): float3 => [f[3], f[3], f[3]];
export const xxxx = (f: floats): float4 => [f[0], f[0], f[0], f[0]];
export const xxxy = (f: floats): float4 => [f[0], f[0], f[0], f[1]];
export const xxxz = (f: floats): float4 => [f[0], f[0], f[0], f[2]];
export const xxxw = (f: floats): float4 => [f[0], f[0], f[0], f[3]];
export const xxyx = (f: floats): float4 => [f[0], f[0], f[1], f[0]];
export const xxyy = (f: floats): float4 => [f[0], f[0], f[1], f[1]];
export const xxyz = (f: floats): float4 => [f[0], f[0], f[1], f[2]];
export const xxyw = (f: floats): float4 => [f[0], f[0], f[1], f[3]];
export const xxzx = (f: floats): float4 => [f[0], f[0], f[2], f[0]];
export const xxzy = (f: floats): float4 => [f[0], f[0], f[2], f[1]];
export const xxzz = (f: floats): float4 => [f[0], f[0], f[2], f[2]];
export const xxzw = (f: floats): float4 => [f[0], f[0], f[2], f[3]];
export const xxwx = (f: floats): float4 => [f[0], f[0], f[3], f[0]];
export const xxwy = (f: floats): float4 => [f[0], f[0], f[3], f[1]];
export const xxwz = (f: floats): float4 => [f[0], f[0], f[3], f[2]];
export const xxww = (f: floats): float4 => [f[0], f[0], f[3], f[3]];
export const xyxx = (f: floats): float4 => [f[0], f[1], f[0], f[0]];
export const xyxy = (f: floats): float4 => [f[0], f[1], f[0], f[1]];
export const xyxz = (f: floats): float4 => [f[0], f[1], f[0], f[2]];
export const xyxw = (f: floats): float4 => [f[0], f[1], f[0], f[3]];
export const xyyx = (f: floats): float4 => [f[0], f[1], f[1], f[0]];
export const xyyy = (f: floats): float4 => [f[0], f[1], f[1], f[1]];
export const xyyz = (f: floats): float4 => [f[0], f[1], f[1], f[2]];
export const xyyw = (f: floats): float4 => [f[0], f[1], f[1], f[3]];
export const xyzx = (f: floats): float4 => [f[0], f[1], f[2], f[0]];
export const xyzy = (f: floats): float4 => [f[0], f[1], f[2], f[1]];
export const xyzz = (f: floats): float4 => [f[0], f[1], f[2], f[2]];
export const xyzw = (f: floats): float4 => [f[0], f[1], f[2], f[3]];
export const xywx = (f: floats): float4 => [f[0], f[1], f[3], f[0]];
export const xywy = (f: floats): float4 => [f[0], f[1], f[3], f[1]];
export const xywz = (f: floats): float4 => [f[0], f[1], f[3], f[2]];
export const xyww = (f: floats): float4 => [f[0], f[1], f[3], f[3]];
export const xzxx = (f: floats): float4 => [f[0], f[2], f[0], f[0]];
export const xzxy = (f: floats): float4 => [f[0], f[2], f[0], f[1]];
export const xzxz = (f: floats): float4 => [f[0], f[2], f[0], f[2]];
export const xzxw = (f: floats): float4 => [f[0], f[2], f[0], f[3]];
export const xzyx = (f: floats): float4 => [f[0], f[2], f[1], f[0]];
export const xzyy = (f: floats): float4 => [f[0], f[2], f[1], f[1]];
export const xzyz = (f: floats): float4 => [f[0], f[2], f[1], f[2]];
export const xzyw = (f: floats): float4 => [f[0], f[2], f[1], f[3]];
export const xzzx = (f: floats): float4 => [f[0], f[2], f[2], f[0]];
export const xzzy = (f: floats): float4 => [f[0], f[2], f[2], f[1]];
export const xzzz = (f: floats): float4 => [f[0], f[2], f[2], f[2]];
export const xzzw = (f: floats): float4 => [f[0], f[2], f[2], f[3]];
export const xzwx = (f: floats): float4 => [f[0], f[2], f[3], f[0]];
export const xzwy = (f: floats): float4 => [f[0], f[2], f[3], f[1]];
export const xzwz = (f: floats): float4 => [f[0], f[2], f[3], f[2]];
export const xzww = (f: floats): float4 => [f[0], f[2], f[3], f[3]];
export const xwxx = (f: floats): float4 => [f[0], f[3], f[0], f[0]];
export const xwxy = (f: floats): float4 => [f[0], f[3], f[0], f[1]];
export const xwxz = (f: floats): float4 => [f[0], f[3], f[0], f[2]];
export const xwxw = (f: floats): float4 => [f[0], f[3], f[0], f[3]];
export const xwyx = (f: floats): float4 => [f[0], f[3], f[1], f[0]];
export const xwyy = (f: floats): float4 => [f[0], f[3], f[1], f[1]];
export const xwyz = (f: floats): float4 => [f[0], f[3], f[1], f[2]];
export const xwyw = (f: floats): float4 => [f[0], f[3], f[1], f[3]];
export const xwzx = (f: floats): float4 => [f[0], f[3], f[2], f[0]];
export const xwzy = (f: floats): float4 => [f[0], f[3], f[2], f[1]];
export const xwzz = (f: floats): float4 => [f[0], f[3], f[2], f[2]];
export const xwzw = (f: floats): float4 => [f[0], f[3], f[2], f[3]];
export const xwwx = (f: floats): float4 => [f[0], f[3], f[3], f[0]];
export const xwwy = (f: floats): float4 => [f[0], f[3], f[3], f[1]];
export const xwwz = (f: floats): float4 => [f[0], f[3], f[3], f[2]];
export const xwww = (f: floats): float4 => [f[0], f[3], f[3], f[3]];
export const yxxx = (f: floats): float4 => [f[1], f[0], f[0], f[0]];
export const yxxy = (f: floats): float4 => [f[1], f[0], f[0], f[1]];
export const yxxz = (f: floats): float4 => [f[1], f[0], f[0], f[2]];
export const yxxw = (f: floats): float4 => [f[1], f[0], f[0], f[3]];
export const yxyx = (f: floats): float4 => [f[1], f[0], f[1], f[0]];
export const yxyy = (f: floats): float4 => [f[1], f[0], f[1], f[1]];
export const yxyz = (f: floats): float4 => [f[1], f[0], f[1], f[2]];
export const yxyw = (f: floats): float4 => [f[1], f[0], f[1], f[3]];
export const yxzx = (f: floats): float4 => [f[1], f[0], f[2], f[0]];
export const yxzy = (f: floats): float4 => [f[1], f[0], f[2], f[1]];
export const yxzz = (f: floats): float4 => [f[1], f[0], f[2], f[2]];
export const yxzw = (f: floats): float4 => [f[1], f[0], f[2], f[3]];
export const yxwx = (f: floats): float4 => [f[1], f[0], f[3], f[0]];
export const yxwy = (f: floats): float4 => [f[1], f[0], f[3], f[1]];
export const yxwz = (f: floats): float4 => [f[1], f[0], f[3], f[2]];
export const yxww = (f: floats): float4 => [f[1], f[0], f[3], f[3]];
export const yyxx = (f: floats): float4 => [f[1], f[1], f[0], f[0]];
export const yyxy = (f: floats): float4 => [f[1], f[1], f[0], f[1]];
export const yyxz = (f: floats): float4 => [f[1], f[1], f[0], f[2]];
export const yyxw = (f: floats): float4 => [f[1], f[1], f[0], f[3]];
export const yyyx = (f: floats): float4 => [f[1], f[1], f[1], f[0]];
export const yyyy = (f: floats): float4 => [f[1], f[1], f[1], f[1]];
export const yyyz = (f: floats): float4 => [f[1], f[1], f[1], f[2]];
export const yyyw = (f: floats): float4 => [f[1], f[1], f[1], f[3]];
export const yyzx = (f: floats): float4 => [f[1], f[1], f[2], f[0]];
export const yyzy = (f: floats): float4 => [f[1], f[1], f[2], f[1]];
export const yyzz = (f: floats): float4 => [f[1], f[1], f[2], f[2]];
export const yyzw = (f: floats): float4 => [f[1], f[1], f[2], f[3]];
export const yywx = (f: floats): float4 => [f[1], f[1], f[3], f[0]];
export const yywy = (f: floats): float4 => [f[1], f[1], f[3], f[1]];
export const yywz = (f: floats): float4 => [f[1], f[1], f[3], f[2]];
export const yyww = (f: floats): float4 => [f[1], f[1], f[3], f[3]];
export const yzxx = (f: floats): float4 => [f[1], f[2], f[0], f[0]];
export const yzxy = (f: floats): float4 => [f[1], f[2], f[0], f[1]];
export const yzxz = (f: floats): float4 => [f[1], f[2], f[0], f[2]];
export const yzxw = (f: floats): float4 => [f[1], f[2], f[0], f[3]];
export const yzyx = (f: floats): float4 => [f[1], f[2], f[1], f[0]];
export const yzyy = (f: floats): float4 => [f[1], f[2], f[1], f[1]];
export const yzyz = (f: floats): float4 => [f[1], f[2], f[1], f[2]];
export const yzyw = (f: floats): float4 => [f[1], f[2], f[1], f[3]];
export const yzzx = (f: floats): float4 => [f[1], f[2], f[2], f[0]];
export const yzzy = (f: floats): float4 => [f[1], f[2], f[2], f[1]];
export const yzzz = (f: floats): float4 => [f[1], f[2], f[2], f[2]];
export const yzzw = (f: floats): float4 => [f[1], f[2], f[2], f[3]];
export const yzwx = (f: floats): float4 => [f[1], f[2], f[3], f[0]];
export const yzwy = (f: floats): float4 => [f[1], f[2], f[3], f[1]];
export const yzwz = (f: floats): float4 => [f[1], f[2], f[3], f[2]];
export const yzww = (f: floats): float4 => [f[1], f[2], f[3], f[3]];
export const ywxx = (f: floats): float4 => [f[1], f[3], f[0], f[0]];
export const ywxy = (f: floats): float4 => [f[1], f[3], f[0], f[1]];
export const ywxz = (f: floats): float4 => [f[1], f[3], f[0], f[2]];
export const ywxw = (f: floats): float4 => [f[1], f[3], f[0], f[3]];
export const ywyx = (f: floats): float4 => [f[1], f[3], f[1], f[0]];
export const ywyy = (f: floats): float4 => [f[1], f[3], f[1], f[1]];
export const ywyz = (f: floats): float4 => [f[1], f[3], f[1], f[2]];
export const ywyw = (f: floats): float4 => [f[1], f[3], f[1], f[3]];
export const ywzx = (f: floats): float4 => [f[1], f[3], f[2], f[0]];
export const ywzy = (f: floats): float4 => [f[1], f[3], f[2], f[1]];
export const ywzz = (f: floats): float4 => [f[1], f[3], f[2], f[2]];
export const ywzw = (f: floats): float4 => [f[1], f[3], f[2], f[3]];
export const ywwx = (f: floats): float4 => [f[1], f[3], f[3], f[0]];
export const ywwy = (f: floats): float4 => [f[1], f[3], f[3], f[1]];
export const ywwz = (f: floats): float4 => [f[1], f[3], f[3], f[2]];
export const ywww = (f: floats): float4 => [f[1], f[3], f[3], f[3]];
export const zxxx = (f: floats): float4 => [f[2], f[0], f[0], f[0]];
export const zxxy = (f: floats): float4 => [f[2], f[0], f[0], f[1]];
export const zxxz = (f: floats): float4 => [f[2], f[0], f[0], f[2]];
export const zxxw = (f: floats): float4 => [f[2], f[0], f[0], f[3]];
export const zxyx = (f: floats): float4 => [f[2], f[0], f[1], f[0]];
export const zxyy = (f: floats): float4 => [f[2], f[0], f[1], f[1]];
export const zxyz = (f: floats): float4 => [f[2], f[0], f[1], f[2]];
export const zxyw = (f: floats): float4 => [f[2], f[0], f[1], f[3]];
export const zxzx = (f: floats): float4 => [f[2], f[0], f[2], f[0]];
export const zxzy = (f: floats): float4 => [f[2], f[0], f[2], f[1]];
export const zxzz = (f: floats): float4 => [f[2], f[0], f[2], f[2]];
export const zxzw = (f: floats): float4 => [f[2], f[0], f[2], f[3]];
export const zxwx = (f: floats): float4 => [f[2], f[0], f[3], f[0]];
export const zxwy = (f: floats): float4 => [f[2], f[0], f[3], f[1]];
export const zxwz = (f: floats): float4 => [f[2], f[0], f[3], f[2]];
export const zxww = (f: floats): float4 => [f[2], f[0], f[3], f[3]];
export const zyxx = (f: floats): float4 => [f[2], f[1], f[0], f[0]];
export const zyxy = (f: floats): float4 => [f[2], f[1], f[0], f[1]];
export const zyxz = (f: floats): float4 => [f[2], f[1], f[0], f[2]];
export const zyxw = (f: floats): float4 => [f[2], f[1], f[0], f[3]];
export const zyyx = (f: floats): float4 => [f[2], f[1], f[1], f[0]];
export const zyyy = (f: floats): float4 => [f[2], f[1], f[1], f[1]];
export const zyyz = (f: floats): float4 => [f[2], f[1], f[1], f[2]];
export const zyyw = (f: floats): float4 => [f[2], f[1], f[1], f[3]];
export const zyzx = (f: floats): float4 => [f[2], f[1], f[2], f[0]];
export const zyzy = (f: floats): float4 => [f[2], f[1], f[2], f[1]];
export const zyzz = (f: floats): float4 => [f[2], f[1], f[2], f[2]];
export const zyzw = (f: floats): float4 => [f[2], f[1], f[2], f[3]];
export const zywx = (f: floats): float4 => [f[2], f[1], f[3], f[0]];
export const zywy = (f: floats): float4 => [f[2], f[1], f[3], f[1]];
export const zywz = (f: floats): float4 => [f[2], f[1], f[3], f[2]];
export const zyww = (f: floats): float4 => [f[2], f[1], f[3], f[3]];
export const zzxx = (f: floats): float4 => [f[2], f[2], f[0], f[0]];
export const zzxy = (f: floats): float4 => [f[2], f[2], f[0], f[1]];
export const zzxz = (f: floats): float4 => [f[2], f[2], f[0], f[2]];
export const zzxw = (f: floats): float4 => [f[2], f[2], f[0], f[3]];
export const zzyx = (f: floats): float4 => [f[2], f[2], f[1], f[0]];
export const zzyy = (f: floats): float4 => [f[2], f[2], f[1], f[1]];
export const zzyz = (f: floats): float4 => [f[2], f[2], f[1], f[2]];
export const zzyw = (f: floats): float4 => [f[2], f[2], f[1], f[3]];
export const zzzx = (f: floats): float4 => [f[2], f[2], f[2], f[0]];
export const zzzy = (f: floats): float4 => [f[2], f[2], f[2], f[1]];
export const zzzz = (f: floats): float4 => [f[2], f[2], f[2], f[2]];
export const zzzw = (f: floats): float4 => [f[2], f[2], f[2], f[3]];
export const zzwx = (f: floats): float4 => [f[2], f[2], f[3], f[0]];
export const zzwy = (f: floats): float4 => [f[2], f[2], f[3], f[1]];
export const zzwz = (f: floats): float4 => [f[2], f[2], f[3], f[2]];
export const zzww = (f: floats): float4 => [f[2], f[2], f[3], f[3]];
export const zwxx = (f: floats): float4 => [f[2], f[3], f[0], f[0]];
export const zwxy = (f: floats): float4 => [f[2], f[3], f[0], f[1]];
export const zwxz = (f: floats): float4 => [f[2], f[3], f[0], f[2]];
export const zwxw = (f: floats): float4 => [f[2], f[3], f[0], f[3]];
export const zwyx = (f: floats): float4 => [f[2], f[3], f[1], f[0]];
export const zwyy = (f: floats): float4 => [f[2], f[3], f[1], f[1]];
export const zwyz = (f: floats): float4 => [f[2], f[3], f[1], f[2]];
export const zwyw = (f: floats): float4 => [f[2], f[3], f[1], f[3]];
export const zwzx = (f: floats): float4 => [f[2], f[3], f[2], f[0]];
export const zwzy = (f: floats): float4 => [f[2], f[3], f[2], f[1]];
export const zwzz = (f: floats): float4 => [f[2], f[3], f[2], f[2]];
export const zwzw = (f: floats): float4 => [f[2], f[3], f[2], f[3]];
export const zwwx = (f: floats): float4 => [f[2], f[3], f[3], f[0]];
export const zwwy = (f: floats): float4 => [f[2], f[3], f[3], f[1]];
export const zwwz = (f: floats): float4 => [f[2], f[3], f[3], f[2]];
export const zwww = (f: floats): float4 => [f[2], f[3], f[3], f[3]];
export const wxxx = (f: floats): float4 => [f[3], f[0], f[0], f[0]];
export const wxxy = (f: floats): float4 => [f[3], f[0], f[0], f[1]];
export const wxxz = (f: floats): float4 => [f[3], f[0], f[0], f[2]];
export const wxxw = (f: floats): float4 => [f[3], f[0], f[0], f[3]];
export const wxyx = (f: floats): float4 => [f[3], f[0], f[1], f[0]];
export const wxyy = (f: floats): float4 => [f[3], f[0], f[1], f[1]];
export const wxyz = (f: floats): float4 => [f[3], f[0], f[1], f[2]];
export const wxyw = (f: floats): float4 => [f[3], f[0], f[1], f[3]];
export const wxzx = (f: floats): float4 => [f[3], f[0], f[2], f[0]];
export const wxzy = (f: floats): float4 => [f[3], f[0], f[2], f[1]];
export const wxzz = (f: floats): float4 => [f[3], f[0], f[2], f[2]];
export const wxzw = (f: floats): float4 => [f[3], f[0], f[2], f[3]];
export const wxwx = (f: floats): float4 => [f[3], f[0], f[3], f[0]];
export const wxwy = (f: floats): float4 => [f[3], f[0], f[3], f[1]];
export const wxwz = (f: floats): float4 => [f[3], f[0], f[3], f[2]];
export const wxww = (f: floats): float4 => [f[3], f[0], f[3], f[3]];
export const wyxx = (f: floats): float4 => [f[3], f[1], f[0], f[0]];
export const wyxy = (f: floats): float4 => [f[3], f[1], f[0], f[1]];
export const wyxz = (f: floats): float4 => [f[3], f[1], f[0], f[2]];
export const wyxw = (f: floats): float4 => [f[3], f[1], f[0], f[3]];
export const wyyx = (f: floats): float4 => [f[3], f[1], f[1], f[0]];
export const wyyy = (f: floats): float4 => [f[3], f[1], f[1], f[1]];
export const wyyz = (f: floats): float4 => [f[3], f[1], f[1], f[2]];
export const wyyw = (f: floats): float4 => [f[3], f[1], f[1], f[3]];
export const wyzx = (f: floats): float4 => [f[3], f[1], f[2], f[0]];
export const wyzy = (f: floats): float4 => [f[3], f[1], f[2], f[1]];
export const wyzz = (f: floats): float4 => [f[3], f[1], f[2], f[2]];
export const wyzw = (f: floats): float4 => [f[3], f[1], f[2], f[3]];
export const wywx = (f: floats): float4 => [f[3], f[1], f[3], f[0]];
export const wywy = (f: floats): float4 => [f[3], f[1], f[3], f[1]];
export const wywz = (f: floats): float4 => [f[3], f[1], f[3], f[2]];
export const wyww = (f: floats): float4 => [f[3], f[1], f[3], f[3]];
export const wzxx = (f: floats): float4 => [f[3], f[2], f[0], f[0]];
export const wzxy = (f: floats): float4 => [f[3], f[2], f[0], f[1]];
export const wzxz = (f: floats): float4 => [f[3], f[2], f[0], f[2]];
export const wzxw = (f: floats): float4 => [f[3], f[2], f[0], f[3]];
export const wzyx = (f: floats): float4 => [f[3], f[2], f[1], f[0]];
export const wzyy = (f: floats): float4 => [f[3], f[2], f[1], f[1]];
export const wzyz = (f: floats): float4 => [f[3], f[2], f[1], f[2]];
export const wzyw = (f: floats): float4 => [f[3], f[2], f[1], f[3]];
export const wzzx = (f: floats): float4 => [f[3], f[2], f[2], f[0]];
export const wzzy = (f: floats): float4 => [f[3], f[2], f[2], f[1]];
export const wzzz = (f: floats): float4 => [f[3], f[2], f[2], f[2]];
export const wzzw = (f: floats): float4 => [f[3], f[2], f[2], f[3]];
export const wzwx = (f: floats): float4 => [f[3], f[2], f[3], f[0]];
export const wzwy = (f: floats): float4 => [f[3], f[2], f[3], f[1]];
export const wzwz = (f: floats): float4 => [f[3], f[2], f[3], f[2]];
export const wzww = (f: floats): float4 => [f[3], f[2], f[3], f[3]];
export const wwxx = (f: floats): float4 => [f[3], f[3], f[0], f[0]];
export const wwxy = (f: floats): float4 => [f[3], f[3], f[0], f[1]];
export const wwxz = (f: floats): float4 => [f[3], f[3], f[0], f[2]];
export const wwxw = (f: floats): float4 => [f[3], f[3], f[0], f[3]];
export const wwyx = (f: floats): float4 => [f[3], f[3], f[1], f[0]];
export const wwyy = (f: floats): float4 => [f[3], f[3], f[1], f[1]];
export const wwyz = (f: floats): float4 => [f[3], f[3], f[1], f[2]];
export const wwyw = (f: floats): float4 => [f[3], f[3], f[1], f[3]];
export const wwzx = (f: floats): float4 => [f[3], f[3], f[2], f[0]];
export const wwzy = (f: floats): float4 => [f[3], f[3], f[2], f[1]];
export const wwzz = (f: floats): float4 => [f[3], f[3], f[2], f[2]];
export const wwzw = (f: floats): float4 => [f[3], f[3], f[2], f[3]];
export const wwwx = (f: floats): float4 => [f[3], f[3], f[3], f[0]];
export const wwwy = (f: floats): float4 => [f[3], f[3], f[3], f[1]];
export const wwwz = (f: floats): float4 => [f[3], f[3], f[3], f[2]];
export const wwww = (f: floats): float4 => [f[3], f[3], f[3], f[3]];
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
  const m = [];
  for (const [i, c] of m0.entries()) {
    if (typeof c === "number")
      m[i] = (c as float) + (m1[i] as float);
    else {
      m.push([]);
      for (const [j, e] of c.entries()) {
        m[i][j] = e + m1[i][j];
      }
    }
  }
  return m as M;
};
export const subm = <M extends matrix>(m0: M, m1: M): M => {
  const m = [];
  for (const [i, c] of m0.entries()) {
    if (typeof c === "number")
      m[i] = (c as float) - (m1[i] as float);
    else {
      m.push([]);
      for (const [j, e] of c.entries()) {
        m[i][j] = e - m1[i][j];
      }
    }
  }
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