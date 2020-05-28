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
  }
  letsStart() {
    this.getBallPosition(); //maybe i could assign it straight to startingBallPosition? do i need to assign it to ballPosition?
    this.startingBallPosition = this.ballPosition;
    this.ballsMove();
    while (this.ballPosition !== this.startingBallPosition) {
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
    // console.log(this.ballPosition);
  }
  ballsMove() {
    // let newBallPosition = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
    this.newBallPosition = {
      x: this.ballPosition.x + this.vector.x,
      y: this.ballPosition.y + this.vector.y,
    };
    if (board[this.newBallPosition.y][this.newBallPosition.x] === "X") {
      this.moveVectorChange();
      this.ballsMove();
    } else {
      this.board[this.ballPosition.y][this.ballPosition.x] = "0";
      this.ballPosition = this.newBallPosition;
      this.board[this.ballPosition.y][this.ballPosition.x] = "1";
    }

    console.log(this.ballPosition);
  }
  moveVectorChange() {
    if (board[this.newBallPosition.y][this.ballPosition.x] === "X") {
      this.vector.y = -this.vector.y;
    } else if (board[this.ballPosition.y][this.newBallPosition.x] === "X") {
      this.vector.x = -this.vector.x;
    } else {
      this.vector.y = -this.vector.y;
      this.vector.x = -this.vector.x;
    }
  }
  endOfGame() {
    console.log(`The ball has returned it's starting position`);
  }
}

const bounce = new BouncingSimulator(board);
bounce.letsStart();
