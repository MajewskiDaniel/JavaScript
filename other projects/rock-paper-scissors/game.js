const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};

const game = {
  playerHand: "",
  aiHand: "",
};

const hands = [...document.querySelectorAll(".select img")];

// player hand selection
function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach((hand) => (hand.style.boxShadow = ""));
  this.style.boxShadow = "0 0 0 4px yellow";
  //   console.log("Player: " + game.playerHand);
}
hands.forEach((hand) => hand.addEventListener("click", handSelection));

// Start game
function startGame() {
  if (!game.playerHand) return alert("wybierz dłoń");
  game.aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
  //   console.log("AI: " + game.aiHand);

  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

document.querySelector(".start").addEventListener("click", startGame);

// print results
function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player;
  document.querySelector('[data-summary="ai-choice"]').textContent = ai;
  document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;

  if (result === "win") {
    document.querySelector("p.wins span").textContent = ++gameSummary.wins;
    document.querySelector('[data-summary="who-win"]').textContent = "You win!";
    document.querySelector('[data-summary="who-win"]').style.color = "green";
  } else if (result === "loss") {
    document.querySelector("p.losses span").textContent = ++gameSummary.losses;
    document.querySelector('[data-summary="who-win"]').textContent =
      "You lose!";
    document.querySelector('[data-summary="who-win"]').style.color = "red";
  } else if (result === "draw") {
    document.querySelector("p.draws span").textContent = ++gameSummary.draws;
    document.querySelector('[data-summary="who-win"]').textContent =
      "It's a draw";
    document.querySelector('[data-summary="who-win"]').style.color = "grey";
  }
}

// game result
function checkResult(player, ai) {
  if (player === ai) {
    // console.log("draw");
    return "draw";
  } else if (
    (player === "paper" && ai === "rock") ||
    (player === "rock" && ai === "scissors") ||
    (player === "scissors" && ai === "paper")
  ) {
    // console.log("You won");
    return "win";
  } else {
    // console.log("You lose");
    return "loss";
  }
}

// endGame
function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow =
    "";
  game.playerHand = "";
  game.aiHand = "";
}
