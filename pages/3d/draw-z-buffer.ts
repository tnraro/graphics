import { float2, float3, dot } from "./mathematics";
import { getBarycentric } from "./draw-utils";
interface IProp {
  params: float3[]
}
const drawZBuffer = (props: IProp, global) => {
  const { params } = props;
  const { zBuffer, clip, width, height, framebuffer, isVisible } = global;

  const [px, py, pz] = params;

  const vz: float3 = pz.map(z => Math.max(Math.min((z - clip.zMin) / (clip.zMax - clip.zMin), 1), 0) * 0xffff) as float3;

  const minX = Math.max(Math.floor(Math.min(...px)), 0);
  const minY = Math.max(Math.floor(Math.min(...py)), 0);
  const maxX = Math.min(Math.ceil(Math.max(...px)), width);
  const maxY = Math.min(Math.ceil(Math.max(...py)), height);

  const getBc = getBarycentric.bind(undefined, px, py);

  for (let x = minX; x < maxX; x += 1) {
    for (let y = minY; y < maxY; y += 1) {
      const p: float2 = [x, y];
      const barycentric: float3 = getBc(p);
      const isInside = barycentric.every(e => e >= 0);
      if (isInside) {
        const z = Math.round(dot(barycentric, vz));
        const index = (height - y) * width + x;
        if (zBuffer[index] < z) {
          zBuffer[index] = z;
          if (isVisible) {
            framebuffer[index * 4] = z / 0xff | 0;
            framebuffer[index * 4 + 3] = 0xff;
          }
        }
      }
    }
  }
}

export default drawZBuffer;