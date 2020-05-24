"use strict";

class MemoryPlayer {
  constructor(uncoveredCards = []) {
    this.foundPairs = [];
    this.uncoveredCards = uncoveredCards;
    this.drawnCard;
    this.numberOfDrawnCards = 0;
    this.nextCard = false;
    this.points = 0;
    this.playerBoard = [];
  }
  playersMove(board) {
    if (
      (this.numberOfDrawnCards < 2 || this.nextCard === true) &&
      board.length > 0
    ) {
      this.uncoverCard(board);
    } else {
      this.numberOfDrawnCards = 0;
      this.nextCard = false;
      this.playerBoard = board;
    }
  }
  getPlayersBoard() {
    return this.playerBoard;
  }

  uncoverCard(board) {
    // check board if player can uncover next card
    let index = Math.floor(Math.random() * board.length);
    if (this.uncoveredCards.includes(board[index])) {
      this.uncoverCard(board);
    } else {
      this.drawnCard = board[index];
      this.numberOfDrawnCards++;
      this.compareCards(board);
    }
  }

  compareCards(board) {
    if (
      this.uncoveredCards.some((card) => card.value === this.drawnCard.value)
    ) {
      // ^^^ checking if we have found a pair
      this.foundPairs.push(this.drawnCard);
      this.foundPairs.push(
        this.uncoveredCards.find((card) => card.value === this.drawnCard.value)
      ); //the same card from uncoveredCards
      this.points++;
      board.splice(board.indexOf(this.drawnCard), 1); //removing drawn card from board
      board.splice(
        board.indexOf(
          this.uncoveredCards.find(
            (card) => card.value === this.drawnCard.value
          )
        ),
        1
      ); //removing second card from board
      this.nextCard = true;
    } else {
      this.uncoveredCards.push(this.drawnCard);
      this.nextCard = false;
    }

    if (!board.length) this.nextCard = false;
    this.playersMove(board);
  }
}

module.exports = MemoryPlayer;
