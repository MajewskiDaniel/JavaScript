const mainBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector(".time>div");

let counter = 0;
let start;

const startStopTime = () => {
  const countingFunction = () => {
    counter++;
    if (counter % 100 === 0) {
      display.textContent = `${counter / 100}.00`;
    } else if (counter % 10 === 0) {
      display.textContent = `${counter / 100}0`;
    } else display.textContent = `${counter / 100}`;
  };
  if (mainBtn.textContent === "Start") {
    start = setInterval(countingFunction, 10);
    mainBtn.textContent = "Stop";
  } else {
    clearInterval(start);
    mainBtn.textContent = "Start";
  }
  const resetTime = () => {
    clearInterval(start);
    mainBtn.textContent = "Start";
    display.textContent = "---";
    counter = 0;
  };
  resetBtn.addEventListener("click", resetTime);
};

mainBtn.addEventListener("click", startStopTime);
