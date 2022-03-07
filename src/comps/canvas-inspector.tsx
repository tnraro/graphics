import styles from "../style/canvas-inspector.module.css";
import type { IModel } from "../renderer/models/model";
import type { ITexture } from "../renderer/types";
import { Dispatch, ChangeEvent, SetStateAction } from "react";
interface IProp {
  deltaTime: number,
  model: IModel,
  textures: ITexture[],
  chosenBuffer: number,
  chooseBuffer: Dispatch<SetStateAction<number>>;
}
const CanvasInspector = (props: IProp) => {
  const { deltaTime, model, textures, chosenBuffer, chooseBuffer } = props;
  const buffers = ["framebuffer", "z-buffer", "undefined", "undefined2", "undefined3", "albedo-buffer"];
  const changeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    chooseBuffer(parseInt(e.target.value));
  }
  return <div className={styles.container}>
    <span>{`deltaTime: ${deltaTime}ms, ${1000 / deltaTime | 0}fps`}</span>
    <span>{`vertices: ${model.vertices.length} | tries ${model.faces.length}`}</span>
    <span>{`textures: ${textures.length}`}</span>
    <label>
      choose a buffer
      <select value={chosenBuffer} onChange={changeSelect}>
        {buffers.map((name, i) => <option key={name} value={i}>{name}</option>)}
      </select>
    </label>
  </div>;
}

export default CanvasInspector;