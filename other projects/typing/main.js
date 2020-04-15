const spanTxt = document.querySelector(".text");
const spanCursor = document.querySelector(".cursor");
const txt = [
  "Wake up, Neo...",
  "The Matrix has you...",
  "Follow the white rabbit.",
  "Knock,  knock,  Neo.",
];

let activeLetter = -20;
let activeWord = 0;

const addLetter = () => {
  if (activeLetter >= 0) {
    spanTxt.textContent += txt[activeWord][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeWord].length) {
    activeWord++;
    if (activeWord === txt.length) return;
    return setTimeout(() => {
      spanTxt.textContent = "";
      activeLetter = -10;
      addLetter();
    }, 4000);
  }
  setTimeout(addLetter, 100);
};

addLetter();

const cursorAnimation = () => {
  spanCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 500);

// function playSound {
//   const audio = document.querySelector('audio[data-sound="knocking"]')
//   audio.play();
// }

// playSound();
