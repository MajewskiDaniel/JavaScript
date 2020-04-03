let color = 125;
document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;

const text = document.querySelector("div");

window.addEventListener("keydown", (e) => {
  if (e.keyCode === 38 && color < 255) {
    color += 5;
    if (color >= 100) text.style.color = "black";
  } else if (e.keyCode === 40 && color > 0) {
    color -= 5;
    if (color < 100) text.style.color = "white";
  }
  document.body.style.backgroundColor = `rgb(${color}, ${color}, ${color})`;
  console.log(e.keyCode, color);
});

//arrow up = 38
//arrow down = 40
