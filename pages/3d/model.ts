import { float, float2, float3, float4, matrix4x4 } from "./mathematics";

export type TextureId = string;
export interface Material {
  textureId: TextureId;
}
// x y z u v nx ny nz
export type Vertex = [float, float, float, float, float, float, float, float];
export interface Model {
  vertices: Vertex[],
  faces: float3[],
  materials: Material[];
  transform: matrix4x4;
}
export const xyz = (vertex: Vertex): float3 => [vertex[0], vertex[1], vertex[2]];
export const xyzw = (vertex: Vertex): float4 => [vertex[0], vertex[1], vertex[2], 1];
export const uv = (vertex: Vertex): float2 => [vertex[3], vertex[4]];
export const norm = (vertex: Vertex): float3 => [vertex[5], vertex[6], vertex[7]];
export const newModel = (): Model => ({
  vertices: [],
  faces: [],
  materials: [],
  transform: [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
});