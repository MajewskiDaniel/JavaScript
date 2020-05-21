"use strict";

class MemoryPlayer {
  constructor(uncoveredCards = []) {
    this.foundPairs = [];
    this.uncoveredCards = uncoveredCards;
    this.drawnCard;
    this.numberOfDrawnCards = 0;
    this.nextCard = false;
    this.points = 0;
  }
  playersMove(board) {
    if (this.numberOfDrawnCards < 2 || this.nextCard === true) {
      this.uncoverCard(board);
    } else return board;
  }

  uncoverCard(board) {
    // check board if player can uncover next card
    let index = Math.floor(Math.random() * board.length);
    if (this.uncoveredCards.includes(board[index])) {
      this.uncoverCard(board);
    } else {
      this.drawnCard = board[index];
      this.numberOfDrawnCards++;
      console.log("drawnCards");
      console.table(this.drawnCard);
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
    console.log("uncoveredCards");
    console.table(this.uncoveredCards);
    console.log("foundPairs");
    console.table(this.foundPairs);
    this.playersMove(board);
  }
}

module.exports = MemoryPlayer;
