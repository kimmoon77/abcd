const canvas = document.getElementById("myCanvas3");
const ctx = canvas.getContext("2d");
const startX = canvas.width / 2;
const startY = canvas.height;
let total = 20;

function drawFractal(x, y, size, angle, depth) {
  if (depth === 0) {
    return;
  }
  const x1 = x + size * Math.cos(angle);
  const y1 = y + size * Math.sin(angle);

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x1, y1);
  ctx.strokeStyle = `rgba(${depth * 10}, 50, ${depth * 5}, ${depth / total})`;
  ctx.lineWidth = depth / 4;
  ctx.stroke();

  setTimeout(() => {
    // 더 넓은 각도로 가지를 나누고, 크기를 조금씩 다르게 설정
    drawFractal(x1, y1, size * 0.8, angle - Math.PI / 4, depth - 1);
    drawFractal(x1, y1, size * 0.7, angle + Math.PI / 3, depth - 1);
    drawFractal(x1, y1, size * 0.6, angle, depth - 1); // 가운데 방향 가지 추가
  }, 800);
}

drawFractal(startX, startY, 120, -Math.PI / 2, total);
