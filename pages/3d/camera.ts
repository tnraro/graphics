import { float, matrix4x4 } from "../mathematics";
import { View } from "./view";

export interface ICamera {
  fov: float;
  aspect: float;
  near: float;
  far: float;
  view: View;
}
export const newCamera = (fov: float, aspect: float, near: float, far: float, view: View) => ({
  fov,
  aspect,
  near,
  far,
  view,
});
export const getPerspectiveProjectionMatrix = (camera: ICamera): matrix4x4 => {
  const { fov, aspect, near, far } = camera;

  const focalLength = 1 / Math.tan(fov / 2); // 1.19175359259421
  const n = near;
  const f = far;
  const subnf = n - f;
  return [
    [focalLength / aspect, 0, 0, 0],
    [0, focalLength, 0, 0],
    [0, 0, (n + f) / subnf, -1],
    [0, 0, 2 * n * f / subnf, 0]
  ];
}