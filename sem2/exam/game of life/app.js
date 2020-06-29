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

const toad = [
  [3, 3],
  [3, 4],
  [3, 5],
  [4, 2],
  [4, 3],
  [4, 4],
];

const beacon = [
  [2, 2],
  [2, 3],
  [3, 2],
  [4, 5],
  [5, 4],
  [5, 5],
];

const glider = [
  [0, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
];

const game = new GameOfLife(board, glider, 9);
game.startTheGame();
