"use strict";

// 1a)	[EXAM] Create bouncy simulator. Get board from ExampleInput.js.
// Y – when bouncing objects 	enters it move it to random direction other
// that it came and Y turns into 0, X – border, 0 – boards object can travel,
// 1 – bouncing object. The program is to show how the object would travel
// and bounce against the walls. Bouncing objects starts in any corner.
// 1 and Y position 	may vary.

// !!! i need to add condition when game ends (in case of infinite loop);

const board = require("./ExamInput.js").board;

class BouncingSimulator {
  constructor(board) {
    // cut from constructor ^^^ left for next version, [startX = 1, startY = 1], [vectorX = 1, vectorY = 1]
    this.board = board;
    // this.vector = { x: vectorX, y: -vectorY };
    this.vector = { x: 1, y: 1 };
    this.ballPosition = {};
    this.newBallPosition;
    // this.startingBallPosition = { x: startX, y: startY };
    this.startingBallPosition = {};
    this.numOfMoves = 0;
  }
  letsStart() {
    this.getBallPosition();
    this.startingBallPosition = this.ballPosition;
    this.bounceLogic();
    while (
      this.ballPosition.x !== this.startingBallPosition.x ||
      this.ballPosition.y !== this.startingBallPosition.y
    ) {
      this.bounceLogic();
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
  bounceLogic() {
    this.newBallPosition = {
      x: this.ballPosition.x + this.vector.x,
      y: this.ballPosition.y + this.vector.y,
    };
    if (
      this.board[this.newBallPosition.y][this.newBallPosition.x] === "X" ||
      this.board[this.newBallPosition.y][this.ballPosition.x] === "X" ||
      this.board[this.ballPosition.y][this.newBallPosition.x] === "X"
    ) {
      this.borderXVectorChange();
      this.bounceLogic();
    } else if (
      this.board[this.newBallPosition.y][this.newBallPosition.x] === "Y"
    ) {
      this.obstacleYVectorChange();
      this.bounceLogic();
    } else this.ballsMove();
  }
  ballsMove() {
    {
      this.board[this.ballPosition.y][this.ballPosition.x] = "0";
      this.ballPosition = this.newBallPosition;
      this.board[this.ballPosition.y][this.ballPosition.x] = "1";
      this.numOfMoves++;
      console.log(`v: ${this.vector.x}, ${this.vector.y}`);
      console.log(`position: ${this.ballPosition.x}, ${this.ballPosition.y}`);
      console.table(this.board);
    }
  }
  borderXVectorChange() {
    if (
      (this.board[this.newBallPosition.y][this.ballPosition.x] === "X" &&
        this.board[this.ballPosition.y][this.newBallPosition.x] === "X") ||
      (this.board[this.newBallPosition.y][this.ballPosition.x] === "0" &&
        this.board[this.ballPosition.y][this.newBallPosition.x] === "0")
    ) {
      this.vector.y = -this.vector.y;
      this.vector.x = -this.vector.x;
    } else if (
      this.board[this.newBallPosition.y][this.ballPosition.x] === "X"
    ) {
      this.vector.y = -this.vector.y;
    } else if (
      this.board[this.ballPosition.y][this.newBallPosition.x] === "X"
    ) {
      this.vector.x = -this.vector.x;
    }
  }
  obstacleYVectorChange() {
    this.ballsMove();
    const randomVectorChange = () => {
      const vectors = [1, -1];
      let newVectorX = vectors[Math.floor(Math.random() * vectors.length)];
      let newVectorY = vectors[Math.floor(Math.random() * vectors.length)];
      if (newVectorX === -this.vector.x && newVectorY === -this.vector.y) {
        randomVectorChange();
      } else {
        this.vector.x = newVectorX;
        this.vector.y = newVectorY;
      }
    };
    randomVectorChange();
  }
  endOfGame() {
    console.log(`The ball has returned to it's starting position`);
    console.log(`number of moves: ${this.numOfMoves}`);
  }
}

const bounce = new BouncingSimulator(board);
bounce.letsStart();
