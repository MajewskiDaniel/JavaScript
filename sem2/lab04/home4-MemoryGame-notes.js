"use strict";
// 1) Create mamory game. Where computer plays with itself. The number of player random 2-4. Each player takes turn in revealing board elements.
// Trying to find a pair. Typical memory game.  Lets make an assumption that players have perfect memory but they only remember elements the reveal by them self.
//
// [EXAM] Create bouncy simulator. Get board from ExampleInput.js. Y – when bouncing objects enters it move it to random direction other that it came and Y turns into 0,
// X – border, 0 – boards object can travel, 1 – bouncing object. The program is to show how the object would travel and bounce against the walls.
// Bouncing objects starts in any corner. 1 and Y position may vary.

class MemoryBoard {
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

  isFinished() {
    // return this.
  }
  getCard(id) {}
  compareCardPair(card1, card2) {
    const isSame = card1 === card2;
    if (isSame) {
      this._removeCardPair(card1, card2);
    }
    return isSame;
  }

  _removeCardPair() {}
}

class MemoryPlayer {
  constructor(uncoveredCards = []) {
    this.points = 0;
    this.foundPairs = [];
    this.uncoveredCards = uncoveredCards;
    this.drawnCard;
    this.numberOfDrawnCards = 0;
    this.nextCard = false;
  }
  start(board) {
    if (this.numberOfDrawnCards <= 2 || this.nextCard === true) {
      this.uncoverCard(); //check if player can draw a card
      const card1 = board.getCard(cardId);
      const card2 = board.getCard(cardId);

      const isSame = board.compareCard(card1, card2);
      // increment own score if true

      return isSame;
    } else return this.uncoveredCards;
  }
  uncoverCard() {
    let index = Math.floor(Math.random() * this.board.length);
    if (this.uncoveredCards.includes(this.board[index]) === true) {
      this.uncoverCard();
    } else {
      this.drawnCard = this.board[index];
      this.numberOfDrawnCards++;
      this.compareCards();
    }
  }
  compareCards() {
    if (
      this.uncoveredCards.some(
        (card) => card.value === this.drawnCard.value
      ) === true
    ) {
      //checking if we have found a pair
      this.foundPairs.push(this.drawnCard);
      this.foundPairs.push(
        this.uncoveredCards.find((card) => card.value === this.drawnCard.value)
      ); //the same card from uncoveredCards
      this.points++;
      this.board.splice(this.board.indexOf(this.drawnCard), 1); //removing drawn card from board
      this.board.splice(
        this.board.indexOf(
          this.uncoveredCards.find(
            (card) => card.value === this.drawnCard.value
          )
        ),
        1
      ); //removing second card from board
      this.nextCard = true;
    } else {
      this.uncoveredCards.push(this.drawnCard);
      this.nextCard = false;
    }
    this.start();

    //instead of spliceing and pushing cards, we can just check if that card was already uncovered and return true or false
    //and move this logic to class Game? could we access to drawnCards and uncoveredCards from there (from Game class)?
  }
}

const randomNumberOfPlayers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; //random number

class Game {
  // constructor(numberOfPlayers, playerClass, board) {

  constructor(Board) {
    // this.numberOfPlayers = numberOfPlayers;
    // this.player = player;
    this.winner;
    this.players = [];
    this.board = new Board(); //board added. i need to have board in Game, not outside
  }

  addPlayer(Player) {
    this.players.push(new Player(i));
  }

  getPlayers() {
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.players.push({ playerNo: i, player: this.player, score: 0 });
    }
  }
  letsPlay() {
    this.board.prepareGame();

    this.players.forEach((player) => player.player.start());
    while (!this.board.isFinished()) {
      let currentPlayer;
      let didFind = currentPlayer.start(this.board); // Player Turn
      // if didFind = true incprement player score
    }
    if (memBoard.board.length > 0) this.letsPlay();
    //memBoard from highest scope. I don't like this :/ I need to change it
    // i need to pass memBoard from Player class to Game class somehow
    else this.scoreCounting();
  }
  scoreCounting() {
    console.log(`There were ${this.players.length} players`);
    console.log(
      `The winner is player number:${this.winner} with ${
        this.players[this.winner - 1].score
      } points`
    );
  }
}

const memBoard = new MemoryBoard(10);
memBoard.createCards();
memBoard.fillTheBoard();
// console.table(board.board);
const player = new MemoryPlayer(memBoard.board);
// player.start();
// console.log(player.drawnCard);
// console.table(player.uncoveredCards);
const memoryGame = new Game(randomNumberOfPlayers(2, 4), player);
memoryGame.getPlayers();
console.table(memoryGame.players);
memoryGame.letsPlay();
console.table(memoryGame.players);
