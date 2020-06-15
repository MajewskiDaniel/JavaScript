"use strict";

//livingCells is array of coordinates where living cells will be at the beginning of game

class GameOfLife {
  constructor(board, initialCells) {
    this.board = board;
    this.initialCells = initialCells;
    this.livingCells = [];
    this.numberOfGenerations = 0;
  }
  startTheGame() {
    this.enliveTheCells();
    this.letThemLive();
  }
  enliveTheCells() {
    this.initialCells.forEach((cell) => {
      this.board[cell[0]][cell[1]] = 1;
    });
    this.livingCells = this.initialCells;
    this.numberOfGenerations++;
  }
  letThemLive() {
    //implement rules here
    this.livingCells.forEach((cell) => {
      this.board[cell[0]][cell[1]];
    });
  }
}

module.exports = GameOfLife;
