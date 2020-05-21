"use strict";

class MemoryBoard {
  constructor(numberOfPairs) {
    this.numberOfPairs = numberOfPairs;
    this.board = [];
    this.cards = [];
    this.idx = 1;
  }
  prepareBoard() {
    this.createCards();
    this.fillTheBoard();
    console.table(this.board);
  }

  createCards() {
    for (let i = 1; i <= this.numberOfPairs; i++) {
      let cardA = { idx: this.idx++, value: i };
      let cardB = { idx: this.idx++, value: i };
      this.cards.push(cardA);
      this.cards.push(cardB);
    }
  }
  fillTheBoard() {
    for (let i = 0; i < this.numberOfPairs * 2; i++) {
      let index = Math.floor(Math.random() * this.cards.length);
      this.board.push(this.cards[index]);
      this.cards.splice(index, 1);
    }
  }

  isFinished() {
    if (this.board.length > 0) return false;
    else return true;
  }

  //
  getCard(id) {}
  compareCardPair(card1, card2) {
    const isSame = card1 === card2;
    if (isSame) {
      this._removeCardPair(card1, card2);
    }
    return isSame;
  }

  _removeCardPair() {}
}

module.exports = MemoryBoard;
