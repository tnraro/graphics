import TextureSetting from "./texture-setting";
import styles from "../style/texture.module.css";
import { ITexture, TUpload, TOnLoad} from "../renderer/types";

let textureId = 0;
const newTexture = (file: File): ITexture => {
  const name = file.name.replace(/\..*?$/, "");
  return {
    id: name + (textureId++),
    uploaded: false,
    file,
    name,
    buf: null,
  }
};
const createTextureBuffer = (img: HTMLImageElement) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  canvas.width = width;
  canvas.height = height;
  context.drawImage(img, 0, 0);
  return context.getImageData(0, 0, width, height);
}
export interface ITextureManager {
  textures: ITexture[],
  dispatch: any
}
const TextureManager = (props: ITextureManager) => {
  const { textures, dispatch } = props;
  const upload: TUpload = (id, imgRef, e) => {
    if (e.target.checked) {
      const buf = createTextureBuffer(imgRef.current!);
      dispatch({
        type: "UPLOAD_TEXTURE",
        id,
        buf,
      });
    } else {
      dispatch({
        type: "UNLOAD_TEXTURE",
        id,
      });
    }
  }
  const onLoad: TOnLoad = e => {
    if (e.target.files == null) {
      throw new Error("files must not be null");
    }
    const textures = [...e.target.files].map(newTexture);
    dispatch({
      type: "APPEND_TEXTURES",
      textures
    });
  }
  return <>
    <input type="file" accept="image/*" multiple onChange={onLoad} />
    <ul className={styles.container}>
      {textures.map(texture =>
        <TextureSetting key={texture.id} {...texture} upload={upload} />)}
    </ul>
  </>;
}

export default TextureManager;