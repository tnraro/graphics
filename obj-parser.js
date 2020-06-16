// 으악 내 눈
const obj = (() => {
    const newTmp = () => ({
        o: [],
        v: [],
        vt: [],
        vn: [],
        iv: [],
        ivt: [],
        ivn: [],
    });
    let tmp = newTmp();
    const o = (name) => {
        tmp.o.push(name);
    }
    const v = (x, y, z, w = 1) => {
        tmp.v.push([
            parseFloat(x),
            parseFloat(y),
            parseFloat(z),
            parseFloat(w)
        ]);
    }
    const f = (...args) => {
        const fs = args.map(a => {
            const [v, vt, vn] = a.split('/');
            return [
                parseFloat(v) - 1,
                parseFloat(vt) - 1,
                parseFloat(vn) - 1
            ];
        });
        tmp.iv.push([fs[0][0], fs[1][0], fs[2][0]]);
        tmp.ivt.push([fs[0][1], fs[1][1], fs[2][1]]);
        tmp.ivn.push([fs[0][2], fs[1][2], fs[2][2]]);
    }
    const parser = (obj) => {
        tmp = newTmp();
        for (const line of obj.trim().split(/\n/)){
            const l = line.trim();
            if (l[0] == '#')
                continue;
            const [type, ...args] = l.split(' ');
            switch (type) {
                case "o": {
                    o(...args)
                };
                break;
                case "v": v(...args);
                break;
                case "f": f(...args);
                break;
                default:
                    console.error(`구현안한: ${l}`);
            }
        }
        return tmp;
    } 
    return {
        parser
    };
})();