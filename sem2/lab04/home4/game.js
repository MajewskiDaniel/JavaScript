"use strict";
const MemoryPlayer = require("./player");

class Game {
  constructor(gameBoard, player, numberOfPlayers) {
    this.numberOfPlayers = numberOfPlayers;
    this.player = player;
    this.gameBoard = gameBoard;
    this.winner;
    this.players = [];
  }

  gameStart() {
    this.getPlayers();
    console.table(this.players);
    this.gameBoard.prepareBoard();
    this.letsPlay();
  }
  getPlayers() {
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.players.push({
        playerNo: i,
        player: new MemoryPlayer(),
        score: 0,
      });
    }
  }
  letsPlay() {
    for (let i = 0; i < this.players.length; i++) {
      if (this.gameBoard.board.length === 0) break;
      // console.log(this.players[i]);
      this.players[i].player.playersMove(this.gameBoard.board);
      this.gameBoard.board = this.players[i].player.getPlayersBoard();
      if (i === this.players.length - 1) i = -1;
    }
    this.gamesScore();
  }
  gamesScore() {
    this.players.forEach((player) => (player.score = player.player.points));
    console.log(`SCOREBOARD:`);
    this.players.forEach((player) => {
      console.log(
        `player number:${player.playerNo}, number of found pairs:${player.score}`
      );
      console.table(player.player.foundPairs);
    });
  }
}

module.exports = Game;
