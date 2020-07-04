import {
  useEffect,
  createRef,
  useState,
} from "react";
import Inspector from "./canvas-inspector";
import styles from "../style/canvas.module.css";
import {draw} from "../3d/draw";

const useInspectorToggle = () => {
  const initialState = process.env.NODE_ENV === "development";
  const [isOpen, setState] = useState(initialState);
  const toggle = () => {
    setState(!isOpen);
  }
  return [isOpen, toggle];
}
const Canvas = (props) => {
  const {width, height, model, textures} = props;
  const _canvas = createRef();
  const [inspector, toggleInspector] = useInspectorToggle();
  const [deltaTime, setDeltaTime] = useState(0);
  useEffect(() => {
    const $canvas = _canvas.current;
    const context = $canvas.getContext("2d");

    const view = [0, 0, 0, 0, 0, 0];

    let isRunning = true;
    const render = () => {
      if (!isRunning) return;
      const time = Date.now();

      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);

      draw({
        context,
        model,
        view,
        width,
        height,
        textures,
      });

      if (inspector) {
        const deltaTime = Date.now() - time;
        setDeltaTime(deltaTime);
      }
      window.requestAnimationFrame(render);
    }
    window.requestAnimationFrame(render);

    return () => isRunning = false;
  });

  return <div className={styles.container}>
    <div className={styles.left}>
      <canvas ref={_canvas} width={width} height={height}></canvas>
    </div>
    <div className={styles.right}>
      <button onClick={toggleInspector}>{inspector ? "close the inspector" : "open the inspector"}</button>
      {inspector && <Inspector deltaTime={deltaTime} model={model} textures={textures}/>}
    </div>
  </div>;
}

export default Canvas;