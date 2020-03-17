"use strict";
// USE CLASSES IN ALL CASSES
// USE STRICT MODE
// TRY TO BE OPTIMAL
// 1) Write a program that automatically converts English text to Morse code and vice versa.
// 2) Write a program that finds the longest palindromic substring of a given string. ‘karakis’, ‘baerren’, ‘kajak’, ‘inni’, ‘sedes’.

const findPalindromic = function(givenString) {
  const palindromicArray = [];
  for (let i = 0; i < givenString.length - 1; i++) {
    for (let j = i + 1; j < givenString.length; j++) {
      let iLeft = i;
      let iRight = j;
      let isTrue = true;
      while (iLeft < iRight) {
        if (givenString[iLeft++] !== givenString[iRight--]) {
          isTrue = false;
        }
      }
      if (isTrue) {
        // console.log(givenString.slice(i, j + 1));
        palindromicArray.push(givenString.slice(i, j + 1));
      }
    }
  }
  return palindromicArray;
};

// findPalindromic("kajak");
console.log(findPalindromic("array"));
// findPalindromic("asdasdsa");
// findPalindromic("abcdefg");
// findPalindromic("abcdefgokoe");

// 3) Given two strings, write a program that efficiently finds the longest common subsequence. ‘karol rolki’
// 4) Write a code that multiplies two matrices together. Dimension validation required.
