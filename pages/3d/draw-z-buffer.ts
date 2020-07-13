import { float2, float3, matrix3x3, matrix3x2 } from "../mathematics";
import { getBarycentric } from "./draw-utils";
import * as math from "../mathematics/math";
interface IProp {
  p: matrix3x3;
}
const drawZBuffer = (props: IProp, global) => {
  const { p } = props;
  const { zBuffer, width, height, framebuffer, isVisible } = global;
  const [px, py, pz] = p;

  const minX = Math.max(Math.floor(Math.min(...px)), 0);
  const minY = Math.max(Math.floor(Math.min(...py)), 0);
  const minZ = Math.max(Math.floor(Math.min(...pz)), 0);
  const maxX = Math.min(Math.ceil(Math.max(...px)), width);
  const maxY = Math.min(Math.ceil(Math.max(...py)), height);
  const maxZ = Math.max(Math.floor(Math.min(...pz)), 0xffff);

  const getBc = getBarycentric.bind(undefined, px, py);

  for (let x = minX; x < maxX; x += 1) {
    for (let y = minY; y < maxY; y += 1) {
      const p: float2 = [x, y];
      const barycentric: float3 = getBc(p);
      const isOutside = barycentric[0] < 0 ||
                        barycentric[1] < 0 ||
                        barycentric[2] < 0;
      if (isOutside)
        continue;
      const z = Math.round(math.dot33(barycentric, pz));
      const index = y * width + x;
      if (zBuffer[index] < z) {
        zBuffer[index] = z;
        if (isVisible) {
          const v = (1 - (z - minZ) / (maxZ - minZ)) * 0xff | 0;
          framebuffer[index * 4    ] = v;
          framebuffer[index * 4 + 3] = 0xff;
        }
      }
    }
  }
}

export default drawZBuffer;