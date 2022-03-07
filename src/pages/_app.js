import { useState, useReducer, useEffect } from "react";

import Canvas from "../comps/canvas";
import TextureManager, { newTexture } from "../comps/texture-manager"
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
    const raw = ply.parser(text);
    const model = m.newModelByFly(raw);
    setModel(model);
  }
  useEffect(() => {
    // load default 3D model and texture
    fetch("taraq.ply")
      .then((res) => res.text())
      .then((taraq) => {
        const raw = ply.parser(taraq);
        const model = m.newModelByFly(raw);
        setModel(model);
      });
    fetch("texture.png")
      .then((res) => res.arrayBuffer())
      .then((buf) => {
        const file = new File([buf], "texture.png", { type: "image/png" });
        const textures = [newTexture(file)];
        dispatchTextures({
          type: "APPEND_TEXTURES",
          textures
        });
      });
  }, []);
  return <main className={styles.container}>
    <section>
      <h2>3D 모델 선택 (.ply)</h2>
      <input type="file" accept=".ply" onChange={loadObj} />
      <Canvas width={298} height={530} model={model} textures={textures.filter(({ uploaded }) => uploaded)} />
    </section>
    <section>
      <h2>텍스처 선택</h2>
      <p>💡 업로드한 텍스처만 사용합니다</p>
      <TextureManager textures={textures} dispatch={dispatchTextures} />
    </section>
  </main>;
}

export default App;