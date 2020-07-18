import { w } from "../mathematics/math";

type type_r8 = (x: number) => number;
type type_r16 = (x: number, y: number) => number;
type type_r24 = (x: number, y: number, z: number) => number;
type type_r32 = (x: number, y: number, z: number, w: number) => number;
export const unsafe_r8: type_r8 = (x) => x;
export const unsafe_r16: type_r16 = (x, y) => x << 8 | y;
export const unsafe_r24: type_r24 = (x, y, z) => x << 16 | y << 8 | z;
export const unsafe_r32: type_r32 = (x, y, z, w) => x << 24 | y << 16 | z << 8 | w;
export const r8: type_r8 = (x) => unsafe_r8(x & 0xff);
export const r16: type_r16 = (x, y) => unsafe_r16(x & 0xff, y & 0xff);
export const r24: type_r24 = (x, y, z) => unsafe_r24(x & 0xff, y & 0xff, z & 0xff);
export const r32: type_r32 = (x, y, z, w) => unsafe_r32(x & 0xff, y & 0xff, z & 0xff, w & 0xff);
type type_w8 = (v: number) => number;
type type_w16 = (v: number) => [number, number];
type type_w24 = (v: number) => [number, number, number];
type type_w32 = (v: number) => [number, number, number, number];
export const w8: type_w8 = (v) => v;
export const w16: type_w16 = (v) => [v >> 8 & 0xff, v & 0xff];
export const w24: type_w24 = (v) => [v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];
export const w32: type_w32 = (v) => [v >> 24 & 0xff, v >> 16 & 0xff, v >> 8 & 0xff, v & 0xff];

export const wxyz = (buf: Uint8ClampedArray, index: number, value: number): void => {
  index *= 4;
  buf[index++] = value >> 16 & 0xff;
  buf[index++] = value >> 8 & 0xff;
  buf[index] = value & 0xff;
};
export const rxyz = (buf: Uint8ClampedArray, index: number): number => {
  index *= 4;
  return unsafe_r24(
    buf[index++],
    buf[index++],
    buf[index]);
}