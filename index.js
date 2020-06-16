const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const width = 530;
const height = 298;
const $status = document.getElementById("status");
const $chewingSpeed = document.getElementById("chewing-speed");
let objData = null;
const edge = (ax, ay, bx, by, px, py) => {
    const vx = bx - ax;
    const vy = by - ay;
    const wx = px - ax;
    const wy = py - ay;
    //    v
    // A ---> B
    //  \
    // w \ P
    // 시계 방향 여부는 스칼라 삼중곱으로 판별할 수 있음
    // 사실 컬링에서 했던 것과 유사
    // u . (v x w) = | ux uy uz |
    //               | vx vy vz |
    //               | wx wy wz |
    // 여기서 u는 up (0, 0, 1)임
    //             = | 0  0  1  |
    //               | vx vy vz |
    //               | wx wy wz |
    //             = | vx vy |
    //               | wx wy |
    return vx * wy - vy * wx < 0;
}
const drawTriangle = (buf, ax, ay, bx, by, cx, cy) => {
    const vx = bx - ax;
    const vy = by - ay;
    const wx = cx - ax;
    const wy = cy - ay;
    // 벡터 u와 w를 외적하여 컬링 구현
    // z 값에 무엇이 들어가도 앞뒤가 바뀌지 않음
    // = 앞뒤 판별엔 z가 필요 없음이 보장됨
    // 따라서, 계산하기 편하게 z값에 0을 넣음
    // u x w = | i  j  k |
    //         | vx vy 0 |
    //         | wx wy 0 |
    //       = k * | vx vy |
    //             | wx wy |
    // 외적한 열벡터의 3번째 원소가 0보다 작으면 뒤
    // 만약 0이라면 u와 w 둘 중에 하나 이상이 역벡터임
    // = 넓이가 0인 삼각형임 = 컬링 대상임
    const isBack = vx * wy - vy * wx <= 0;
    if (isBack) return;

    const minX = Math.floor(Math.min(ax, bx, cx));
    const minY = Math.floor(Math.min(ay, by, cy));
    const maxX = Math.ceil(Math.max(ax, bx, cx));
    const maxY = Math.ceil(Math.max(ay, by, cy));
    
    for (let x = minX; x < maxX; x += 1) {
        for (let y = minY; y < maxY; y += 1) {
            const index = (y * width + x) * 4;
            const isOutside = edge(ax, ay, bx, by, x, y)
                            ||edge(bx, by, cx, cy, x, y)
                            ||edge(cx, cy, ax, ay, x, y);
            if (!isOutside) {
                buf[index + 0] = 0xff;
                buf[index + 1] = 0xff;
                buf[index + 2] = 0xff;
                buf[index + 3] = 0xff;
            }
        }
    }
}
const draw = () => {
    if (objData == null) return;
    const time = Date.now();

    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);
    const img = context.getImageData(0, 0, width, height);

    for (const [ia, ib, ic] of objData.iv) {
        const [ax, ay] = objData.v[ia];
        const [bx, by] = objData.v[ib];
        const [cx, cy] = objData.v[ic];

        drawTriangle(img.data, ax, ay, bx, by, cx, cy);
    }

    context.putImageData(img, 0, 0);

    const deltaTime = Date.now() - time;
    $chewingSpeed.innerHTML = `옴뇸뇸 : ${deltaTime}ms`;
    window.requestAnimationFrame(draw);
}
const loadObj = async (file) => {
    const text = await file.text();

    run(text);
}
const run = (text) => {
    objData = obj.parser(text);
    $status.innerHTML = `버택스 : ${objData.v.length} | 트라이 : ${objData.iv.length}<br>
    오브젝트 : [${objData.o.join(',')}]`;

    window.requestAnimationFrame(draw);
}
run(document.getElementById("start-model").innerHTML);