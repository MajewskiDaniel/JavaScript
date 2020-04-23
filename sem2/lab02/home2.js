"use strict";
// USE CLASSES IN ALL CASSES
// USE STRICT MODE
// TRY TO BE OPTIMAL
// 1) Write a program that automatically converts English text to Morse code and vice versa - example

const morseCodeMap = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-",
  " ": " "
};

var ulits = (function() {
  function swap(json) {
    var ret = {};
    for (var key in json) {
      ret[json[key]] = key;
    }
    return ret;
  }

  return {
    swap
  };
})();

class UnitConverter {
  constructor(convertCodeMap, reverseConvertCodeMap) {
    this.convertCodeMap = convertCodeMap;
    this.reverseConvertCodeMap = reverseConvertCodeMap;
  }

  Convert(char) {
    return this.convertCodeMap[char];
  }

  Unconvert(char) {
    return this.reverseConvertCodeMap[char];
  }
}

class SetsConverter {
  constructor(convert, unconvert) {
    this.convert = convert;
    this.unconvert = unconvert;
  }

  ConvertString(text) {
    return text
      .toLowerCase()
      .split("")
      .map(this.convert);
  }

  UnconvertArray(array) {
    return array.map(this.unconvert).join("");
  }
}

let unitConverter = new UnitConverter(morseCodeMap, ulits.swap(morseCodeMap));

let setsConverter = new SetsConverter(
  unitConverter.Convert.bind(unitConverter),
  unitConverter.Unconvert.bind(unitConverter)
);

let convertionResult = setsConverter.ConvertString("Karol");
console.log(convertionResult);
let unconversionResult = setsConverter.UnconvertArray(convertionResult);
console.log(unconversionResult);


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

<<<<<<< HEAD
=======
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

>>>>>>> f6e9c365d225e519507c5963cfc9f693271bbddf
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
<<<<<<< HEAD
  [1, 1, 2]
=======
  [1, 1, 2],
>>>>>>> f6e9c365d225e519507c5963cfc9f693271bbddf
];

const matrixB = [
  [2, 4, 0],
  [1, 0, 2],
<<<<<<< HEAD
  [0, 3, 3]
];

class MatrixValidator {
  constructor() {  }
  MultiplyValidator(matrixA, matrixB) {
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

}

class MatrixOperator {
  constructor(){}
  MatrixMultiplier(matrixA, matrixB) {
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
}

class MatrixCalculator {
  constructor(matrixValidator, matrixOperator){
    this.matrixValidator = matrixValidator;
    this.matrixOperator = matrixOperator;
  }
  MatrixMultiply(matrixA, matrixB){
    if(this.matrixValidator.MultiplyValidator(matrixA, matrixB)){
      return this.matrixOperator.MatrixMultiplier(matrixA, matrixB)
    }
  }
}

let matrixValidator = new MatrixValidator();
let matrixOperator = new MatrixOperator();
let matrixCalculator = new MatrixCalculator(matrixValidator, matrixOperator);

let result = matrixCalculator.MatrixMultiply(matrixA, matrixB);
console.table(result);
=======
  [0, 3, 3],
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

// add class: MatrixOperator and another class to present result
function matrixMulti(matrixA, matrixB) {
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
>>>>>>> f6e9c365d225e519507c5963cfc9f693271bbddf
