import styles from "../style/canvas-inspector.module.css";
import { IModel } from "../3d/model";
import { ITexture } from "./header";
import * as DrawPass from "./hooks/useDrawPass";
import { Dispatch, ChangeEvent } from "react";
interface IProp {
  deltaTime: number,
  model: IModel,
  textures: ITexture[],
  drawPass: DrawPass.IState,
  setDrawPass: Dispatch<DrawPass.IAction>;
}
const CanvasInspector = (props: IProp) => {
  const { deltaTime, model, textures, drawPass, setDrawPass } = props;
  const toggleZBuffer = (e: ChangeEvent<HTMLInputElement>) => {
    setDrawPass({
      type: "TOGGLE_Z_BUFFER"
    });
  }
  const toggleFramebuffer = (e: ChangeEvent<HTMLInputElement>) => {
    setDrawPass({
      type: "TOGGLE_FRAMEBUFFER"
    });
  }
  return <div className={styles.container}>
    <span>{`deltaTime: ${deltaTime}ms`}</span>
    <span>{`vertices: ${model.vertices.length} | tries ${model.faces.length}`}</span>
    <span>{`textures: ${textures.length}`}</span>
    <div>
      <label>
        <input type="checkbox" checked={drawPass.zBuffer} onChange={toggleZBuffer} />
        {"z-buffer"}
      </label>
    </div>
    <div>
      <label>
        <input type="checkbox" checked={drawPass.framebuffer} onChange={toggleFramebuffer} />
        {"framebuffer"}
      </label>
    </div>
  </div>;
}

export default CanvasInspector;