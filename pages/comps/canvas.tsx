import {
  useEffect,
  createRef,
  useState,
  useReducer,
} from "react";
import Inspector from "./canvas-inspector";
import styles from "../style/canvas.module.css";
import {draw} from "../3d/draw";
import { newCamera } from "../3d/camera";
import * as math from "../mathematics/math";
import * as t from "../3d/transform";
import { useDrawPass } from "./hooks/useDrawPass";
import { View } from "../3d/view";
import { IModel } from "../3d/model";
import { ITexture } from "./header";
import { toNDC2 } from "../3d/canvas";

const useInspectorToggle = () => {
  const initialState = process.env.NODE_ENV === "development";
  const [isOpen, setState] = useState(initialState);
  const toggle = () => {
    setState(!isOpen);
  }
  return [isOpen, toggle];
}
interface IProp {
  width: number,
  height: number,
  model: IModel,
  textures: ITexture[],
}
const Canvas = (props: IProp) => {
  const {width, height, model, textures} = props;
  const _canvas = createRef<HTMLCanvasElement>();
  const [inspector, toggleInspector] = useInspectorToggle();
  const [deltaTime, setDeltaTime] = useState(0);
  const [drawPass, setDrawPass] = useDrawPass();
  useEffect(() => {
    const $canvas = _canvas.current;
    const context = $canvas.getContext("2d");
    const view: View = [[0, 0, -1], [0, 0, 7]];
    // const transform = math.mul4x4x4(t.translate(-.725, -.588, -1.38), t.scale(1, 1, 1));
    const transform = math.mul4x4x4(t.translate(0, 0, 0), t.scale(1, 1, 1));
    const camera = newCamera(80 * math.TAU / 360, width / height, 0.1, 1000, view);
    model.transform = transform;
    let r = 0;
    let distance = 7;
    const id = setInterval(() => {
      const deltaTime = 50 / 1000;
      r += 50 * math.radians * deltaTime;
      const [sin, cos] = math.sincos(r);
      camera.view[0][0] = sin;
      camera.view[0][2] = - cos;
      camera.view[1][0] = sin * distance;
      camera.view[1][2] = cos * distance;/*
      // camera.fov += 10 * math.TAU / 360 * deltaTime;
      // camera.view[1][2] += - 0.1 * deltaTime;*/
    }, 50);
    const sensitive = 1.5;
    const mousemove = e => {
      if (e.target === $canvas) {
        const [x, y] = toNDC2(width, height, [e.offsetX, e.offsetY])
        // camera.view[1][0] = x * sensitive;
        distance = 5 + y * sensitive;
      }
    };
    let isRunning = true;
    const render = () => {
      if (!isRunning) return;
      const time = Date.now();

      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);

      draw({
        context,
        model,
        camera,
        width,
        height,
        textures,
        drawPass
      });

      if (inspector) {
        const deltaTime = Date.now() - time;
        setDeltaTime(deltaTime);
      }
      setTimeout(() => {
        window.requestAnimationFrame(render);
      }, 0);
      window.addEventListener("mousemove", mousemove);
    }
    window.requestAnimationFrame(render);

    return () => {
      isRunning = false;
      clearInterval(id);
      window.removeEventListener("mousemove", mousemove);
    };
  }, [props, drawPass]);

  return <div className={styles.container}>
    <div className={styles.left}>
      <canvas ref={_canvas} width={width} height={height}></canvas>
    </div>
    <div className={styles.right}>
      <button onClick={toggleInspector as (event: any) => void}>{inspector ? "close the inspector" : "open the inspector"}</button>
      {inspector && <Inspector deltaTime={deltaTime} model={model} textures={textures} drawPass={drawPass} setDrawPass={setDrawPass} />}
    </div>
  </div>;
}

export default Canvas;