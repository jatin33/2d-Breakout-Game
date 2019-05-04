const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const dx = 2;
const dy = -2;

let x = canvas.width / 2;
let y = canvas.height - 30;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}

setInterval(draw, 10);