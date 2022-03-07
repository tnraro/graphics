import { useState, createRef } from "react";
import styles from "../style/texture.module.css";
import { ITexture, TUpload, TImgRef } from "../renderer/types";

interface TextureSetting extends ITexture {
  upload: TUpload
}
const TextureSetting = (props: TextureSetting) => {
  const { id, uploaded, name, file, upload } = props;
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef: TImgRef = createRef();
  return <li className={styles.item}>
    <img
      ref={imgRef}
      src={URL.createObjectURL(file)}
      width="100"
      onLoad={setIsImgLoaded.bind(undefined, true)}
    />
    <span className={styles.name}> {name} </span>
    <label>
      <input
        type="checkbox"
        checked={uploaded}
        onChange={upload.bind(undefined, id, imgRef)}
        disabled={!isImgLoaded}
      />
      upload
    </label>
  </li>;
};
export default TextureSetting;