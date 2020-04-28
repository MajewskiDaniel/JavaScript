"use strict";
//                   +-------------------------+
//                   ¦ 34 ¦ 21 ¦ 32 ¦ 41 ¦ 25  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 14 ¦ 42 ¦ 43 ¦ 14 ¦ 31  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 54 ¦ 45 ¦ 52 ¦ 42 ¦ 23  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 33 ¦ 15 ¦ 51 ¦ 31 ¦ 35  ¦
//                   +----+----+----+----+-----¦
//                   ¦ 21 ¦ 52 ¦ 33 ¦ 13 ¦ 23  ¦
//                   +-------------------------+
// 1) Do you like treasure hunts? In this problem you are to write a program to explore the above array for a treasure.
// The values in the array are clues. Each cell contains an integer between 11 and 55;
// for each value the ten's digit represents the row number and the unit's digit represents the column number of the cell containing the next clue.
// Starting in the upper left corner (at 1,1), use the clues to guide your search of the array. (The first three clues are 11, 34, 42).
// The treasure is a cell whose value is the same as its coordinates. Your program should output the cells it visits during its search,
// and a message indicating where you found the treasure.

const treasureMap = [
  [34, 21, 32, 41, 25],
  [14, 42, 43, 14, 31],
  [54, 45, 52, 42, 23],
  [33, 15, 51, 31, 35],
  [21, 52, 33, 13, 23],
];
const startingArea = 11;

class MapValidator {
  constructor() {}
  mapValidation(treasureMap) {
    let mapCorrect = true;
    treasureMap.forEach((row) => {
      row.forEach((hint) => {
        if (typeof hint !== "number") mapCorrect = false;
      });
    });
    return `map is ${mapCorrect}`;
  }
}

class TreasureHunt {
  constructor() {}
  treasureHunt(treasureMap, startingArea) {
    let searchArea = startingArea;
    let path = [];
    path.push(startingArea);
    while (searchArea !== treasureMap[Math.floor(searchArea / 10) - 1][(searchArea % 10) - 1]) {
      searchArea = treasureMap[Math.floor(searchArea / 10) - 1][(searchArea % 10) - 1];
      path.push(searchArea);
    }
    return {
      path: path,
      treasure: `the treasure is in: row ${searchArea.toString()[0]}, column ${searchArea.toString()[1]};`,
    };
  }
}
const isMapValid = new MapValidator();
console.log(isMapValid.mapValidation(treasureMap));

const whereIsTreasure = new TreasureHunt();
console.table(whereIsTreasure.treasureHunt(treasureMap, startingArea).path);
console.log(whereIsTreasure.treasureHunt(treasureMap, startingArea).treasure);

// 2) Chess board. Program is to choose at random one of the chess piece (except the pawn) and place it at the random spot on the board.
// After placing any piece (except first one) check all present pieces move ranges and see if any can reach other piece. If so, give that pieces position and quit program.
// FACTORY (with class hierarhy) + SINGLETON pattern

// chess board 8x8: a-h and 1-8
// pieces:
// king - (K)
// queen - (Q)
// bishop - goniec - (b)
// knight - skoczek - (k)
// rook - wieża - (r)
// i'm going to place radndomly pieces one by one on the board by changing current position to it's first letter (K,Q,b,k,r) and then check possible moves.
// i need to make moves map to each piece

const board = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];

const mapOfMoves = {
  king: [i++, j++],
};

// 3) [EXAM] Create bouncy simulator. Get board from ExampleInput.js. X – border, 0 – boards object can travel, 1 – bouncing object.
// The program is to show how the object would travel and bounce against the walls. The program is to end when object comes back to original position.
