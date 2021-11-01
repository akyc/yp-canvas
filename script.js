const canvas = document.getElementById('canvas'),
    ctx = canvas.getContext(`2d`),
    logoList = [[0, 0]]

ctx.strokeStyle = 'white'
ctx.lineWidth = 16

const render = (center) => {
    const [x, y] = center
    ctx.strokeRect(150 + x, 114 + y, 100, 0);
    ctx.strokeRect(120 + x, 144 + y, 0, 150);
    ctx.strokeRect(280 + x, 144 + y, 0, 150);
}

render(logoList[0])

const move = (direction) => {
    const [mx, my] = direction
    ctx.clearRect(0, 0, 400, 400)
    logoList.map(el => {
        el[0] += mx
        el[1] += my
        render(el)
    })
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