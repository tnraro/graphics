import {useState, useReducer, createRef, useEffect} from "react";

import Canvas from "./comps/canvas";
import styles from "./style/app.module.css"
import tstyles from "./style/texture-preview.module.css"
import "./style/global.css";
import * as obj from "./loader/obj";

let textureId = 0;
const newTexture = file => {
  const name = file.name.replace(/\..*?$/, "");
  return {
    id: name + (textureId++),
    uploaded: false,
    file,
    name,
    data: undefined,
  }
};
const App = () => {
  const [model, setModel] = useState(obj.newObj());

  const [textures, dispatchTextures] = useReducer((state, action) => {
    switch (action.type) {
      case "APPEND_TEXTURES": {
        return [...action.files.map(newTexture), ...state];
      }
      case "UPLOAD_TEXTURE": {
        return state.map(texture => {
          if (texture.id !== action.id)
            return texture;
          return {
            ...texture,
            data: action.data,
            uploaded: true,
          };
        });
      }
      case "UNLOAD_TEXTURE": {
        return state.map(texture => {
          if (texture.id !== action.id)
            return texture;
          return {
            ...texture,
            data: undefined,
            uploaded: false,
          };
        });
      }
    }
  }, []);
  const loadObj = async e => {
    const file = e.target.files[0];
    const text = await file.text();
    const model = await obj.parser(text);

    setModel(model);
  }
  const loadTextures = async e => {
    const files = [...e.target.files];
    console.log(files);
    dispatchTextures({
      type: "APPEND_TEXTURES",
      files
    });
  }
  const uploadTexture = (id, imgRef, e) => {
    if (e.target.checked) {
      const data = createTextureData(imgRef);
      dispatchTextures({
        type: "UPLOAD_TEXTURE",
        id,
        data,
      });
    } else {
      dispatchTextures({
        type: "UNLOAD_TEXTURE",
        id,
      });
    }
  }
  return <div className={styles.container}>
    <h1>쿠앙쿠앙</h1>
    <input type="file" accept=".obj" onChange={loadObj}/>
    <input type="file" accept="image/*" multiple onChange={loadTextures}/>
    <Canvas width={530} height={298} model={model} textures={textures.filter(({uploaded}) => uploaded)}/>
    <ul className={tstyles.container}>
      {textures.map(texture => <TextureSetting key={texture.id} {...texture} upload={uploadTexture} />)}
    </ul>
  </div>;
}
const createTextureData = (imgRef) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const img = imgRef.current;
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  canvas.width = width;
  canvas.height = height;
  context.drawImage(img, 0, 0);
  return context.getImageData(0, 0, width, height);
}
const TextureSetting = (props) => {
  const { id, uploaded, name, file, upload } = props;
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const imgRef = createRef();
  return <li className={tstyles.item}>
    <img
      ref={imgRef}
      src={URL.createObjectURL(file)}
      width="100"
      onLoad={setIsImgLoaded.bind(undefined, true)}
    />
    <span className={tstyles.name}>{name}</span>
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
}

export default App;