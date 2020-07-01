import "./styles.css";

const canvas = document.querySelector("#canvas1");
const context = canvas.getContext("2d");

canvas.addEventListener("mousemove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("touchmove", event => {
  draw(event.layerX, event.layerY);
});
canvas.addEventListener("mousedown", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("mouseup", () => {
  context.closePath();
  isDrag = false;
});
canvas.addEventListener("touchstart", () => {
  context.beginPath();
  isDrag = true;
});
canvas.addEventListener("touchend", () => {
  context.closePath();
  isDrag = false;
});
let isDrag = false;

const clearButton = document.querySelector("#button1");
clearButton.addEventListener("click", () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  isDrag=false;
});

function draw(x, y) {
  if (!isDrag) {
    return;
  }
  context.lineWidth = 5;
  context.lineTo(x, y);
  context.stroke();
}
