import type { Ply } from "../../loader/ply";
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
export const newModelByFly = (ply: Ply): IModel => {
  const model = {
    vertices: ply.vertices.map(vertex => [
      [
        vertex['x'],
        vertex['y'],
        vertex['z'],
      ],
      [
        vertex['s'],
        vertex['t'],
      ],
      [
        vertex['nx'],
        vertex['ny'],
        vertex['nz'],
      ]
    ]),
    faces: [],
    materials: [],
    transform: I4x4(),
  } as IModel;
  for (const face of ply.faces) {
    const indices = face['vertex_indices'] as number[];
    for (let i = 2; i < indices.length; i++) {
      model.faces.push([
        indices[0],
        indices[i - 1],
        indices[i],
      ]);
    }
  }
  return model;
}