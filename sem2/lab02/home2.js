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
    // .reduce((a, b) => (a.length > b.length ? a : b));
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

class SearchCommon {
  constructor(firstString, secondString) {
    this.firstString = firstString;
    this.secondString = secondString;
  }
  FindCommon() {
    const commonArray = [];
    for (let i = 0; i < this.firstString.length; i++) {
      for (let j = 0; j < this.secondString.length; j++) {
        let isTheSame = true,
          idxFirst = i,
          idxSecond = j,
          idxEnd;
        while (
          idxFirst < this.firstString.length &&
          idxSecond < this.secondString.length &&
          isTheSame
        ) {
          if (this.firstString[idxFirst++] === this.secondString[idxSecond++]) {
            idxEnd = idxFirst - 1;
            if (i < idxEnd) {
              commonArray.push(this.firstString.slice(i, idxEnd + 1));
            }
          } else {
            isTheSame = false;
          }
        }
      }
    }
    return commonArray.reduce((a, b) => (a.length > b.length ? a : b));
  }
}
let searchCommon = new SearchCommon("abrakadabra", "brawo");
console.log(searchCommon.FindCommon());

// 4) Write a code that multiplies two matrices together. Dimension validation required.

const matrixA = [
  [3, 2, 0],
  [1, 1, 2]
];

const matrixB = [
  [2, 4, 0],
  [1, 0, 2],
  [0, 3, 3]
];
//class matrixValidator, method multiplyValidation:
function matrixValidation(matrixA, matrixB) {
  let correct = false,
    correctA = false,
    correctB = false;
  if (matrixA.length === 1 && matrixB.length === 1) {
    correct = true;
  }
  for (let i = 0; i < matrixA.length - 1; i++) {
    if (matrixA[i].length === matrixA[i + 1].length) {
      correctA = true;
    }
  }
  for (let i = 0; i < matrixB.length - 1; i++) {
    if (matrixB[i].length === matrixB[i + 1].length) {
      correctB = true;
    }
  }
  if (correctA && correctB) {
    if (matrixA[0].length === matrixB.length) {
      correct = true;
    }
  }
  if (!correct) {
    console.log("wrong matrix dimensions");
  }
  return correct;
}
console.log(matrixValidation(matrixA, matrixB));

function matrixMulti(matrixA, matrixB, matrixValidation) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixB.length; j++) {
      let element = 0;
      for (let k = 0; k < matrixB[0].length; k++) {
        element += matrixA[i][k] * matrixB[k][j];
      }
      row.push(element);
    }
    result.push(row);
  }
  return result;
}

console.table(matrixMulti(matrixA, matrixB));

// mnożenie zdefiniowane jest wyłącznie dla macierzy, z których pierwsza ma tyle kolumn, co druga wierszy.
// Jeżeli A jest macierzą n x m, a B macierzą typu m x p, to ich iloczyn, oznaczany AB, czasem też A*B,
// jest macierzą o wymiarach n x p.

// matrix multiplication: https://pl.wikipedia.org/wiki/Mno%C5%BCenie_macierzy
// c12 = a11 * b12 + a12 * b22
