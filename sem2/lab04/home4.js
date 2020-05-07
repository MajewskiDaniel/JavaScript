"use strict";
// 1) Create mamory game. Where computer plays with itself. The number of player random 2-4. Each player takes turn in revealing board elements.
// Trying to find a pair. Typical memory game.  Lets make an assumption that players have perfect memory but they only remember elements the reveal by them self.
//
// [EXAM] Create bouncy simulator. Get board from ExampleInput.js. Y – when bouncing objects enters it move it to random direction other that it came and Y turns into 0,
// X – border, 0 – boards object can travel, 1 – bouncing object. The program is to show how the object would travel and bounce against the walls.
// Bouncing objects starts in any corner. 1 and Y position may vary.

class Board {
  constructor(numberOfPairs) {
    this.numberOfPairs = numberOfPairs;
    this.board = [];
    this.cards = [];
    this.idx = 1;
  }
  createCards() {
    for (let i = 1; i <= this.numberOfPairs; i++) {
      let cardA = { idx: this.idx++, value: i };
      let cardB = { idx: this.idx++, value: i };
      this.cards.push(cardA);
      this.cards.push(cardB);
    }
  }
  fillTheBoard() {
    for (let i = 0; i < this.numberOfPairs * 2; i++) {
      let index = Math.floor(Math.random() * this.cards.length);
      this.board.push(this.cards[index]);
      this.cards.splice(index, 1);
    }
  }
}

class Player {
  constructor(board) {
    this.points = 0;
    this.foundPairs = [];
    this.board = board;
    this.uncoveredCards = [];
    this.drawnCard;
  }
  uncoverCard() {
    let index = Math.floor(Math.random() * this.board.length);
    if (this.uncoveredCards.includes(this.board[index]) === true) {
      this.uncoverCard();
    } else {
      this.drawnCard = this.board[index];
    }
  }
  compareCards() {
    if (this.uncoveredCards.includes(this.drawnCard.value) === true) {
      //check this ^^^
      this.foundPairs.push(this.drawnCard);
      this.foundPairs.push("the same card from uncoveredCards"); //check this
      this.points++;
      this.board.splice("drwan card"); //check this
      this.board.splice("the same card from uncoveredCards"); //check this
    } else {
      this.uncoveredCards.push(this.drawnCard);
    }
    //instead of spliceing and pushing cards, we can just check if that card was already uncovered and return true or false
    //and move this logic to class Game? could we access to drawnCards and uncoveredCards from there (from Game class)?
  }
}

class Game {
  constructor(numberOfPlayers) {} //random number
}

const board = new Board(15);
board.createCards();
board.fillTheBoard();
console.table(board.board);
const player = new Player(board.board);
player.uncoverCard();
console.log(player.drawnCard);
console.table(player.uncoveredCards);
