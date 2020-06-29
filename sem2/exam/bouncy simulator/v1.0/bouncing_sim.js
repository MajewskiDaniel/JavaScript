"use strict";

// 1) [EXAM] Create bouncy simulator. Get board from ExampleInput.js.
// X – border, 0 – boards object can travel, 1 – bouncing object.
// The program is to show how the object would travel and bounce against the walls.
// The program is to end when object comes back to original position.

const board = require("./ExamInput.js").board;

class BouncingSimulator {
  constructor(board) {
    this.board = board;
    this.vector = { x: 1, y: 1 };
    this.ballPosition = {};

    this.newBallPosition;
    this.startingBallPosition;
    this.numOfMoves = 0;
    //i can add an option to enter starting ball position as parameter
  }
  letsStart() {
    this.getBallPosition();
    this.startingBallPosition = this.ballPosition;
    this.ballsMove();
    while (
      this.ballPosition.x !== this.startingBallPosition.x ||
      this.ballPosition.y !== this.startingBallPosition.y
    ) {
      this.ballsMove();
    }
    this.endOfGame();
  }
  getBallPosition() {
    for (let row = 0; row < this.board.length; row++) {
      for (let column = 0; column < this.board[row].length; column++) {
        if (this.board[row][column] === "1") {
          this.ballPosition.x = column;
          this.ballPosition.y = row;
        }
      }
    }
  }
  ballsMove() {
    this.newBallPosition = {
      x: this.ballPosition.x + this.vector.x,
      y: this.ballPosition.y + this.vector.y,
    };
    if (this.board[this.newBallPosition.y][this.newBallPosition.x] === "X") {
      this.moveVectorChange();
      this.ballsMove();
    } else {
      this.board[this.ballPosition.y][this.ballPosition.x] = "0";
      this.ballPosition = this.newBallPosition;
      this.board[this.ballPosition.y][this.ballPosition.x] = "1";
      this.numOfMoves++;
      console.log(`v: ${this.vector.x}, ${this.vector.y}`);
      console.log(`position: ${this.ballPosition.x}, ${this.ballPosition.y}`);
      console.table(this.board);
    }
  }
  moveVectorChange() {
    // if (
    //   this.board[this.newBallPosition.y][this.ballPosition.x] === "X" &&
    //   this.board[this.ballPosition.y][this.newBallPosition.x] === "X"
    // ) {
    //   this.vector.y = -this.vector.y;
    //   this.vector.x = -this.vector.x;
    // } else
    if (this.board[this.newBallPosition.y][this.ballPosition.x] === "X") {
      this.vector.y = -this.vector.y;
    } else if (
      this.board[this.ballPosition.y][this.newBallPosition.x] === "X"
    ) {
      this.vector.x = -this.vector.x;
    }
  }
  endOfGame() {
    console.log(`The ball has returned to it's starting position`);
    console.log(`number of moves: ${this.numOfMoves}`);
  }
}

const bounce = new BouncingSimulator(board);
bounce.letsStart();
