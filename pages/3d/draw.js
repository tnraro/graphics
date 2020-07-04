import {drawTri} from "./drawTri";

const mapVertex = (model, indices) => {
  const {v, t, n} = indices;

  return {
    v: model.v[v],
    t: model.vt[t],
    n: model.vn[n]
  };
}
export const draw = (props) => {
  const { context, model, view, width, height, textures } = props;

  const img = context.getImageData(0, 0, width, height);
  for (const face of model.f) {
    const [v0, v1, v2] = face.map(mapVertex.bind(undefined, model));

    drawTri({
      framebuffer: img.data,
      width, height,
      v0, v1, v2,
      textures,
    });
  }

  context.fillStyle = "white";
  context.fillRect(200, 150, 100, 100);
  context.putImageData(img, 0, 0);
}