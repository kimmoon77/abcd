const canvas = document.getElementById("myCanvas2");
const ctx = canvas.getContext("2d");
const startX = canvas.width / 2;
const startY = canvas.height;
let total = 20;
let step = 0;

function drawFractal(x, y, size, angle, depth) {
  if (depth === 0) {
    return;
  }
  const x1 = x + size * Math.cos(angle);
  const y1 = y + size * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = `rgba(0, ${depth * 10}, 0, ${depth / total})`;
  ctx.lineWidth = depth / 5;
  ctx.stroke();

  setTimeout(() => {
    drawFractal(x1, y1, size * 0.75, angle - Math.PI / 6, depth - 1);
    drawFractal(x1, y1, size * 0.75, angle + Math.PI / 6, depth - 1);
  }, 1000);
}

drawFractal(startX, startY, 125, -Math.PI / 2, total);
