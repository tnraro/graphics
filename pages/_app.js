import {useState, useReducer, createRef, useEffect} from "react";

import Canvas from "./comps/canvas";
import TextureManager from "./comps/texture-manager"
import styles from "./style/app.module.css"
import "./style/global.css";
import * as obj from "./loader/obj";

const App = () => {
  const [model, setModel] = useState(obj.newObj());

  const [textures, dispatchTextures] = useReducer((state, action) => {
    switch (action.type) {
      case "APPEND_TEXTURES": {
        return [...action.textures, ...state];
      }
      case "UPLOAD_TEXTURE": {
        return state.map(texture => {
          if (texture.id !== action.id)
            return texture;
          return {
            ...texture,
            buf: action.buf,
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
            buf: undefined,
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
  return <div className={styles.container}>
    <h1>쿠앙쿠앙</h1>
    <input type="file" accept=".obj" onChange={loadObj}/>
    <Canvas width={530} height={298} model={model} textures={textures.filter(({uploaded}) => uploaded)}/>
    <TextureManager textures={textures} dispatch={dispatchTextures}/>
  </div>;
}

export default App;