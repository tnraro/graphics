import {
  useEffect,
  useState,
  useRef,
} from "react";
import Inspector from "./canvas-inspector";
import styles from "../style/canvas.module.css";
import {draw} from "../renderer/draw";
import { newCamera } from "../renderer/models/camera";
import * as math from "../renderer/mathematics/math";
import * as t from "../renderer/models/transform";
import { View } from "../renderer/models/view";
import { IModel } from "../renderer/models/model";
import { ITexture } from "../renderer/types";
import { toNDC2 } from "../renderer/models/canvas";

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
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inspector, toggleInspector] = useInspectorToggle();
  const [deltaTime, setDeltaTime] = useState(0);
  const [chosenBuffer, chooseBuffer] = useState(0);
  useEffect(() => {
    const $canvas = canvasRef.current;
    if ($canvas == null) {
      throw new Error("The canvas must not be null");
    }
    const context = $canvas.getContext("2d");
    if (context == null) {
      throw new Error("The context must not be null");
    }
    const view: View = [[0, 0, -1], [0, 0, 7]];
    // const transform = math.mul4x4x4(t.translate(-.725, -.588, -1.38), t.scale(1, 1, 1));
    const transform = math.mul4x4x4(t.translate(0, 0, 0), t.scale(1, 1, 1));
    const camera = newCamera(80 * math.TAU / 360, width / height, .01, 10, view);
    model.transform = transform;
    let r = 45 * math.radians;
    let distance = 7;
    const [sin, cos] = math.sincos(r);
    camera.view[0][0] = sin;
    camera.view[0][2] = - cos;
    camera.view[1][0] = sin * distance;
    camera.view[1][2] = cos * distance;
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
    const mousemove = (e: MouseEvent) => {
      if (e.target === $canvas) {
        const [x, y] = toNDC2(width, height, [e.offsetX, e.offsetY])
        // camera.view[1][0] = x * sensitive;
        distance = y * sensitive * 6 + 7;
      }
    };
    let isRunning = true;
    const zbuf = new ImageData(width, height);
    const albedo = new ImageData(width, height);
    zbuf.data.fill(0xffff);
    const render = () => {
      if (!isRunning) return;
      const time = Date.now();

      context.fillStyle = "black";
      context.fillRect(0, 0, width, height);
      const img = context.getImageData(0, 0, width, height);
      zbuf.data.fill(0xffff);
      albedo.data.fill(0);
      const buffers = [img, zbuf, null, null, null, albedo];
      draw({
        models: [model],
        camera,
        buffers,
        width,
        height,
        textures,
        _debugShowBuffer: chosenBuffer
      });
      context.putImageData(img, 0, 0);

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
  }, [props, chosenBuffer]);

  return <div className={styles.container}>
    <div className={styles.left}>
      <canvas ref={canvasRef} width={width} height={height}></canvas>
    </div>
    <div className={styles.right}>
      <button onClick={toggleInspector as (event: any) => void}>{inspector ? "close the inspector" : "open the inspector"}</button>
      {inspector && <Inspector deltaTime={deltaTime} model={model} textures={textures} chosenBuffer={chosenBuffer} chooseBuffer={chooseBuffer} />}
    </div>
  </div>;
}

export default Canvas;