import {ChangeEvent, RefObject} from "react";

export interface ITexture {
  id: string,
  uploaded: boolean,
  file: File,
  name: string,
  buf: ImageData;
}
export type TImgRef = RefObject<HTMLImageElement>;
export type TUpload = (id: string, imgRef: TImgRef, e: ChangeEvent<HTMLInputElement>) => void;
export type TOnLoad = (e: ChangeEvent<HTMLInputElement>) => void;