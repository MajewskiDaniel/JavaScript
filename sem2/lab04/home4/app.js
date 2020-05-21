"use strict";
// 1) Create mamory game. Where computer plays with itself. The number of player random 2-4. Each player takes turn in revealing board elements.
// Trying to find a pair. Typical memory game.  Lets make an assumption that players have perfect memory but they only remember elements the reveal by them self.
//

const MemoryBoard = require("./board");
const MemoryPlayer = require("./player");
const Game = require("./game");

const board = new MemoryBoard(10);
const player = new MemoryPlayer();
const randomNumberOfPlayers = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const memoryGame = new Game(board, player, randomNumberOfPlayers(2, 4));
memoryGame.gameStart();

// const memBoard = new MemoryBoard(10);
// memBoard.createCards();
// memBoard.fillTheBoard();
// // console.table(board.board);
// const player = new MemoryPlayer(memBoard.board);
// // player.start();
// // console.log(player.drawnCard);
// // console.table(player.uncoveredCards);
// const memoryGame = new Game(randomNumberOfPlayers(2, 4), player);
// memoryGame.getPlayers();
// console.table(memoryGame.players);
// memoryGame.letsPlay();
// console.table(memoryGame.players);
