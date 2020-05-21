"use strict";

class Game {
  constructor(board, player, numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.player = player;
    this.board = board;
    this.winner;
    this.players = [];
    this.firstMove = true;
    this.nextMove = false;
  }

  gameStart() {
    this.getPlayers();
    console.table(this.players);
    this.board.prepareBoard();
    this.letsPlay();
  }
  getPlayers() {
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.players.push({ playerNo: i, player: this.player, score: 0 });
    }
  }
  letsPlay() {
    for (let i = 0; i < this.players.length; i++) {
      this.players[i].player.playersMove();
      if (this.board.isFinished()) break;
      if (i === this.players.length) i = 0;
    }
    this.scoreCounting();
  }
  scoreCounting() {
    console.log(`SCOREBOARD:`);
    this.players.forEach((player) =>
      console.log(
        `player number:${player.playerNo}, found pairs:${player.score}`
      )
    );
  }
}

module.exports = Game;
