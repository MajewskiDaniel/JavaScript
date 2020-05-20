"use strict";

class Game {
  constructor(numberOfPlayers, player, board) {
    this.numberOfPlayers = numberOfPlayers;
    this.player = player;
    this.winner;
    this.players = [];
    this.board = board;
  }

  addPlayer(Player) {
    this.players.push(new Player(i));
  }

  getPlayers() {
    for (let i = 1; i <= this.numberOfPlayers; i++) {
      this.players.push({ playerNo: i, player: this.player, score: 0 });
    }
  }
  letsPlay() {
    this.board.prepareGame();

    this.players.forEach((player) => player.player.start());
    while (!this.board.isFinished()) {
      let currentPlayer;
      let didFind = currentPlayer.start(this.board); // Player Turn
      // if didFind = true increment player score
    }
    if (memBoard.board.length > 0) this.letsPlay();
    //memBoard from highest scope. I don't like this :/ I need to change it
    // i need to pass memBoard from Player class to Game class somehow
    else this.scoreCounting();
  }
  scoreCounting() {
    console.log(`There were ${this.players.length} players`);
    console.log(
      `The winner is player number:${this.winner} with ${
        this.players[this.winner - 1].score
      } points`
    );
  }
}
