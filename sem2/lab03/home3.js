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

const treasureHunt = function (treasureMap, startingArea) {};

// 2) Chess board. Program is to choose at random one of the chess piece (except the pawn) and place it at the random spot on the board.
// After placing any piece (except first one) check all present pieces move ranges and see if any can reach other piece. Is so Give that pieces position and quit program.
// FACTORY (with class hierarhy) + SINGLETON pattern

// 3) [EXAM] Create bouncy simulator. Get board from ExampleInput.js. X – border, 0 – boards object can travel, 1 – bouncing object.
// The program is to show how the object would travel and bounce against the walls. The program is to end when object comes back to original position.
