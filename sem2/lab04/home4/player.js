"use strict";

class MemoryPlayer {
  constructor(uncoveredCards = []) {
    this.points = 0;
    this.foundPairs = [];
    this.uncoveredCards = uncoveredCards;
    this.drawnCard;
    this.numberOfDrawnCards = 0;
    this.nextCard = false;
  }
  start(board) {
    if (this.numberOfDrawnCards <= 2 || this.nextCard === true) {
      this.uncoverCard(); //check if player can draw a card
      const card1 = board.getCard(cardId);
      const card2 = board.getCard(cardId);

      const isSame = board.compareCard(card1, card2);
      // increment own score if true

      return isSame;
    } else return this.uncoveredCards;
  }
  uncoverCard() {
    let index = Math.floor(Math.random() * this.board.length);
    if (this.uncoveredCards.includes(this.board[index]) === true) {
      this.uncoverCard();
    } else {
      this.drawnCard = this.board[index];
      this.numberOfDrawnCards++;
      this.compareCards();
    }
  }
  compareCards() {
    if (
      this.uncoveredCards.some(
        (card) => card.value === this.drawnCard.value
      ) === true
    ) {
      //checking if we have found a pair
      this.foundPairs.push(this.drawnCard);
      this.foundPairs.push(
        this.uncoveredCards.find((card) => card.value === this.drawnCard.value)
      ); //the same card from uncoveredCards
      this.points++;
      this.board.splice(this.board.indexOf(this.drawnCard), 1); //removing drawn card from board
      this.board.splice(
        this.board.indexOf(
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
    this.start();

    //instead of spliceing and pushing cards, we can just check if that card was already uncovered and return true or false
    //and move this logic to class Game? could we access to drawnCards and uncoveredCards from there (from Game class)?
  }
}
