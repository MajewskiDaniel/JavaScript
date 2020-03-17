"use strict";
// USE CLASSES IN ALL CASSES
// USE STRICT MODE
// TRY TO BE OPTIMAL
// 1) Write a program that automatically converts English text to Morse code and vice versa.
// 2) Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’, ‘sedes’.

class SearchPalindromic {
  constructor(givenString) {
    this.givenString = givenString;
  }
  FindPalindromic(givenString) {
    const palindromicArray = [];
    for (let i = 0; i < givenString.length - 1; i++) {
      for (let j = i + 1; j < givenString.length; j++) {
        let isTheSame = true,
          idxLeft = i,
          idxRight = j;
        while (idxLeft < idxRight) {
          if (givenString[idxLeft++] !== givenString[idxRight--]) {
            isTheSame = false;
          }
        }
        if (isTheSame) {
          // console.log(givenString.slice(i, j + 1));
          palindromicArray.push(givenString.slice(i, j + 1));
        }
      }
    }
    return palindromicArray;
  }
}
let searchPalindromic = new SearchPalindromic();
let searchResult = searchPalindromic.FindPalindromic("abrakadabra");
console.log(searchResult);

// const findPalindromic = function(givenString) {
//   const palindromicArray = [];
//   for (let i = 0; i < givenString.length - 1; i++) {
//     for (let j = i + 1; j < givenString.length; j++) {
//       let isTheSame = true,
//         idxLeft = i,
//         idxRight = j;
//       while (idxLeft < idxRight) {
//         if (givenString[idxLeft++] !== givenString[idxRight--]) {
//           isTheSame = false;
//         }
//       }
//       if (isTheSame) {
//         // console.log(givenString.slice(i, j + 1));
//         palindromicArray.push(givenString.slice(i, j + 1));
//       }
//     }
//   }
//   return palindromicArray;
// };

// console.log(findPalindromic("array"));
// findPalindromic("kajak");
// findPalindromic("asdasdsa");
// findPalindromic("abcdefg");
// findPalindromic("abcdefgokoe");

// 3) Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
// 4) Write a code that multiplies two matrices together. Dimension validation required.
