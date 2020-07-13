import { float, float2, float3, float4, matrix4x4, I4x4, matrix } from "../mathematics";
import { Transform } from "./transform";

export type TextureId = string;
export interface Material {
  textureId: TextureId;
}
export type Vertex = {
  p: float3,
  t: float2,
  n: float3
};
export interface IModel {
  vertices: Vertex[],
  faces: float3[],
  materials: Material[];
  transform: Transform;
}
export const newModel = (): IModel => ({
  vertices: [],
  faces: [],
  materials: [],
  transform: I4x4(),
});