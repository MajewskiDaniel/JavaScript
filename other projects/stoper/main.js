const mainBtn = document.querySelector(".main");
const resetBtn = document.querySelector(".reset");
const display = document.querySelector(".time>div");

let counter = 0;
let start;

const startStopTime = () => {
  if (mainBtn.textContent === "Start") {
    start = setInterval(countingFunction, 10);
    mainBtn.textContent = "Stop";
  } else {
    clearInterval(start);
    mainBtn.textContent = "Start";
  }
};

const countingFunction = () => {
  counter++;
  display.textContent = (counter / 100).toFixed(2);
};

const resetTime = () => {
  clearInterval(start);
  mainBtn.textContent = "Start";
  display.textContent = "---";
  counter = 0;
};

resetBtn.addEventListener("click", resetTime);
mainBtn.addEventListener("click", startStopTime);
