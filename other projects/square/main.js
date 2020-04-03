const div = document.querySelector("div");
let divX = 150;
let divY = 150;
div.style.left = divX + "px";
div.style.top = divY + "px";

let squareMove = false;

let insertDivX;
let insertDivY;

div.addEventListener("mousedown", (e) => {
  div.style.backgroundColor = "grey";
  squareMove = !squareMove;
  insertDivX = e.offsetX;
  insertDivY = e.offsetY;
});

div.addEventListener("mousemove", (e) => {
  if (squareMove) {
    divX = e.clientX - insertDivX;
    divY = e.clientY - insertDivY;
    div.style.left = `${divX}px`;
    div.style.top = `${divY}px`;
  }
});

div.addEventListener("mouseup", () => {
  div.style.backgroundColor = "black";
  squareMove = !squareMove;
});
