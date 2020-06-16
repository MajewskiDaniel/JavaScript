"use strict";

//livingCells is array of coordinates where living cells will be at the beginning of game

class GameOfLife {
  constructor(board, initialCells) {
    this.board = board;
    this.initialCells = initialCells;
    this.livingCells = [];
    this.numberOfGenerations = 0;
    this.emergingCells = [];
    this.dyingCells = [];
    this.survivingCells = [];
    this.surroundings = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ];
  }
  startTheGame() {
    this.enliveInitialCells();
    this.checkLivingCells();
  }
  enliveInitialCells() {
    this.initialCells.forEach((cell) => {
      this.board[cell[0]][cell[1]] = 1;
    });
    this.livingCells = this.initialCells;
    this.numberOfGenerations++;
  }
  checkLivingCells() {
    this.livingCells.forEach((cell) => {
      let surroundingLife = 0;
      for (let i = 0; i < this.surroundings.length; i++) {
        if (
          this.board[cell[0] + this.surroundings[i][0]][
            cell[1] + this.surroundings[i][1]
          ] === 1
        )
          surroundingLife++;
      }
      if (2 <= surroundingLife <= 3) {
        this.survivingCells.push(cell);
      } else this.dyingCells.push(cell);
    });
  }
  whoDies() {}
  letThemLive() {}
  letThemDie() {}
}

module.exports = GameOfLife;
