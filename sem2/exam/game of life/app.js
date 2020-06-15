// Implement:  https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
"use strict";

const LifeBoard = require("./lifeboard");
const GameOfLife = require("./game");

const board = new LifeBoard(10).createBoard();

const livingExperiment = [
  [3, 3],
  [3, 4],
  [3, 5],
];

const game = new GameOfLife(board, livingExperiment);
game.startTheGame();
console.table(game.board);
