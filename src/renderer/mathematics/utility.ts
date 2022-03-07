import { matrix2x2, matrix3x3, matrix4x4 } from "./types";

export const I2x2 = (): matrix2x2 => [[1, 0], [0, 1]];
export const I3x3 = (): matrix3x3 => [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
export const I4x4 = (): matrix4x4 => [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];