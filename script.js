const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext(`2d`)
let logoList = [[0, 0]]

ctx.strokeStyle = 'white'
ctx.lineWidth = 16

ctx.fillStyle = "white";
// const render = ([x, y]) => {
//     ctx.strokeRect(150 + x, 114 + y, 100, 0);
//     ctx.strokeRect(120 + x, 144 + y, 0, 150);
//     ctx.strokeRect(280 + x, 144 + y, 0, 150);
// }

const render = ([x, y]) => {
    ctx.fillRect(16 + 22 + 112 + x, 106 + y, 100, 16);
    ctx.fillRect(112 + x, 16 + 22 + 106 + y, 16, 150);
    ctx.fillRect(16 + 22 + 100 + 22 + 112 + x, 16 + 22 + 106 + y, 16, 150);
}

render(logoList[0])

const move = ([mx, my]) => {
    ctx.clearRect(0, 0, 400, 400)
    logoList.map(el => {
        el[0] += mx
        el[1] += my
    })
    logoList = logoList.filter(el => {
        const [x, y] = el
        return (x > -288 && x < 288) && (y > -294 && y < 294)
    })
    logoList.forEach(el => {
        const [x, y] = el
        if (x > 112) {
            if (!logoList.some(el => el[0] < x && el[1] == y)) {
                logoList.push([x - 400, y])
            }
        }
        if (x < -112) {
            if (!logoList.some(el => el[0] > x && el[1] == y)) {
                logoList.push([x + 400, y])
            }
        }
        if (y > 106) {
            if (!logoList.some(el => el[1] < y && el[0] == x)) {
                logoList.push([x, y - 400])
            }
        }
        if (y < -106) {
            if (!logoList.some(el => el[1] > y && el[0] == x)) {
                logoList.push([x, y + 400])
            }
        }
    })
    logoList.forEach(el => render(el))
}

document.addEventListener('keydown', function (event) {
    const nav = {
        'ArrowUp': [0, -25],
        'ArrowRight': [25, 0],
        'ArrowDown': [0, 25],
        'ArrowLeft': [-25, 0],
    }
    if (event.code in nav) {
        move(nav[event.code])
    }
});