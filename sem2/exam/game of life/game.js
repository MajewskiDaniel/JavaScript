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
    console.table(this.board);
    this.checkLivingCells();
    this.isAnyoneBorn();
    this.letThemLive();
    this.letThemDie();
    console.table(this.board);
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
        ) {
          surroundingLife++;
        }
      }
      if (surroundingLife >= 2 && surroundingLife <= 3) {
        this.survivingCells.push(cell);
      } else this.dyingCells.push(cell);
    });
  }
  isAnyoneBorn() {
    this.livingCells.forEach((cell) => {
      let surroundingCoordinates = [];
      for (let i = 0; i < this.surroundings.length; i++) {
        surroundingCoordinates.push([
          cell[0] + this.surroundings[i][0],
          cell[1] + this.surroundings[i][1],
        ]);
      }
      surroundingCoordinates.forEach((cell) => {
        let surroundingLife = 0;
        for (let i = 0; i < this.surroundings.length; i++) {
          if (
            this.board[cell[0] + this.surroundings[i][0]][
              cell[1] + this.surroundings[i][1]
            ] === 1
          ) {
            surroundingLife++;
          }
        }
        if (surroundingLife === 3) {
          this.emergingCells.push(cell);
        }
      });
      surroundingCoordinates.length = 0;
    });
  }
  letThemLive() {
    this.emergingCells.forEach((cell) => {
      this.board[cell[0]][cell[1]] = 1;
    });
  }
  letThemDie() {
    this.dyingCells.forEach((cell) => {
      this.board[cell[0]][cell[1]] = 0;
    });
  }
}

module.exports = GameOfLife;
