import { float, float3, quaternion } from "./types";
import {
  mul13, add33, add44, sub44, mul44,
  cross33, sincos, sincos3,
  xyzx, xyzw, yzxy, yzxz, zxyy, zxyz, wwwx, wwww, xyz, w, x, zzyz, yxxy } from "./math";

const mul = (a: quaternion, b: quaternion) => {
  return sub44(add44(mul44(wwww(a), xyzw(b)), mul44(add44(mul44(xyzx(a), wwwx(b)), mul44(yzxy(a), zxyy(b))), [1, 1, 1, -1])), mul44(zxyz(a), yzxz(b)));
}
const rotate = (current: quaternion, rotation: quaternion): quaternion => {
  const p = xyz(current);
  const u = xyz(rotation);
  const v = w(rotation);
  const uxp = cross33(u, p);
  const nu = add33(p, mul13(2, add33(mul13(v, uxp), cross33(u, uxp))));
  return [...nu, 0];
}
const RotateX = (angle: float): quaternion => {
  const [sin, cos] = sincos(0.5 * angle);
  return [sin, 0, 0, cos];
}
const RotateY = (angle: float): quaternion => {
  const [sin, cos] = sincos(0.5 * angle);
  return [0, sin, 0, cos];
}
const RotateZ = (angle: float): quaternion => {
  const [sin, cos] = sincos(0.5 * angle);
  return [0, 0, sin, cos];
}
const eulerYZX = (xyz: float3): quaternion => {
  // rotateY(y) rotateZ(z) rotateX(x)
  const [sin, cos] = sincos3(mul13(0.5, xyz));
  return add44(mul44(mul44([...sin, x(cos)], yxxy(cos)), zzyz(cos)), mul44(mul44(mul44(zzyz(sin), [...cos, x(sin)]), yxxy(sin)), [-1, -1, 1, 1]));
}