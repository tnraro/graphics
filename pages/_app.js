import {useState, useReducer, useEffect} from "react";

import Canvas from "../comps/canvas";
import TextureManager from "../comps/texture-manager"
import styles from "../style/app.module.css"
import "../style/global.css";
import * as ply from "../loader/ply";
import * as m from "../renderer/models/model";

const App = () => {
  const [model, setModel] = useState(m.newModel());
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
    const raw = await ply.parser(text);
    const model = m.newModel();
    for (const vertex of raw.vertices) {
      model.vertices.push([
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
      ]);
    }
    for (const face of raw.faces) {
      const indices = face['vertex_indices'];
      for (let i = 2; i < indices.length; i++) {
        model.faces.push([
          indices[0],
          indices[i - 1],
          indices[i],
        ]);
      }
    }
    setModel(model);
  }
  useEffect(() => {
    // load default 3D model and texture
    
  }, []);
  return <div className={styles.container}>
    <h1>쿠앙쿠앙</h1>
    <input type="file" accept=".ply" onChange={loadObj}/>
    <Canvas width={298} height={530} model={model} textures={textures.filter(({uploaded}) => uploaded)}/>
    <TextureManager textures={textures} dispatch={dispatchTextures}/>
  </div>;
}

export default App;