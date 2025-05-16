import "./style.css";

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;

const width = 200;
const height = 100;
const rx = 10;
const ry = 10;
const x = 100;
const y = 100;

function draw() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;

  if (canvas) {
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    if (canvas.getContext) {
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "rgb(200 0 0)";

        ctx.beginPath();
        ctx.moveTo(x + rx, y);
        ctx.lineTo(x + width - rx, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
        ctx.lineTo(x + width, y + height - ry);
        ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
        ctx.lineTo(x + rx, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
        ctx.lineTo(x, y + rx);
        ctx.quadraticCurveTo(x, y, x + rx, y);
        ctx.closePath();

        ctx.fill();
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", draw);
