const spanTxt = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const txt = [
  "Wake up, Neo...",
  "The Matrix has you...",
  "Follow the white rabbit.",
  "Knock knock Neo.",
];

let activeLetter = 0;
let activeWord = 0;

const addLetter = () => {
  spanTxt.textContent += txt[activeWord][activeLetter];
  activeLetter++;
  if (activeLetter === txt[activeWord].length) {
    activeWord++;
    if (activeWord === txt.length) return;
    return setTimeout(() => {
      spanTxt.textContent = "";
      activeLetter = 0;
      addLetter();
    }, 2000);
  }
  setTimeout(addLetter, 100);
};

addLetter();

const cursorAnimation = () => {
  spanCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 500);
