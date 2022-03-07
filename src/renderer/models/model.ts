import type { float2, float3 } from "../mathematics/types";
import { I4x4 } from "../mathematics/utility";
import { Transform } from "./transform";

export type TextureId = string;
export interface Material {
  textureId: TextureId;
}
export type Vertex = [float3, float2, float3];
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