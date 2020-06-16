// Implement Game of Life:  https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
"use strict";

const LifeBoard = require("./lifeboard");
const GameOfLife = require("./game");

const board = new LifeBoard(10).createBoard();

const blinker = [
  [4, 3],
  [4, 4],
  [4, 5],
];

const game = new GameOfLife(board, blinker);
game.startTheGame();
console.table(game.board);
