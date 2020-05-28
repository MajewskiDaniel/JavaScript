"use strict";

// 1) [EXAM] Create bouncy simulator. Get board from ExampleInput.js.
// X – border, 0 – boards object can travel, 1 – bouncing object.
// The program is to show how the object would travel and bounce against the walls.
// The program is to end when object comes back to original position.

const board = require("./ExamInput.js");

class BouncingSimulator {
  constructor(board) {
    this.board = board;
    this.vector = { x: 1, y: 1 };
    this.ballPosition = {};
  }
  letsStart() {
    this.ballsMove();
  }
  ballsMove() {
    for (let row = 0; row < this.board.length; row++) {
      for (let column = 0; column < this.board[row].length; column++) {
        if (this.board[row][column] === "1") {
          this.ballPosition.x = column;
          this.ballPosition.y = row;
        }
      }
    }
    console.table(this.ballPosition);
  }
  moveVectorChange() {}
  endOfGame() {}
}

const bounce = new BouncingSimulator(board);
bounce.letsStart();
