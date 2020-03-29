// IF YOU WANT TO RUN PROGRAM, JUST UNCOMMENT IT'S PART

// 1) Write a program that prints all prime numbers in given range. Take sub from 1-100.
"use strict";
// Eratosthenes sieve:

// function findPrimeNumbers(upperLimit) {
//   const numbers = [];
//   const primeNumbers = [];
//   for (let i = 2; i <= upperLimit; i++) {
//     numbers.push(i);
//   }
//   let deletedNumbers = [];
//   for (let i = 0; i <= Math.sqrt(upperLimit) + 1; i++) {
//     for (let j = numbers[i] * 2; j <= numbers.length + 1; j += numbers[i]) {
//       deletedNumbers.push(j);
//     }
//   }
//   deletedNumbers.sort((a, b) => (a > b ? 1 : -1));
//   deletedNumbers = deletedNumbers.filter(
//     (value, index, array) => array.indexOf(value) === index
//   );
//   for (let k = 2; k <= upperLimit; k++) {
//     if (deletedNumbers.includes(k) === false) {
//       primeNumbers.push(k);
//     }
//   }
//   console.table(primeNumbers);
// }
// findPrimeNumbers(100);

// 2) Write a guessing game where the user has to guess a secret number.
// After every guess the program tells the user whether their number was too large or too small.
// At the end the number of tries needed should be printed.
// It counts only as one try if they input the same number multiple times consecutively. Range 1-100.

// const guessingGame = function(min, max) {
//   let counter = 0;
//   let guessedNumber;
//   const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
//   const randomNumberGuess = (min, max) => {
//     counter = counter + 1;
//     return (guessedNumber = Math.floor(Math.random() * (max - min + 1) + min));
//   };
//   while (randomNumber !== guessedNumber) {
//     randomNumberGuess(min, max);
//     if (guessedNumber > randomNumber) {
//       max = guessedNumber - 1;
//     } else if (guessedNumber < randomNumber) {
//       min = guessedNumber + 1;
//     } else {
//       console.log(
//         `Your random number is ${guessedNumber} and I guessed it in ${counter} steps`
//       );
//     }
//   }
// };
// guessingGame(1, 100);

// 3) Write a function that rotates a list by k elements. For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2].
// Try solving this without creating a copy of the list.

// const inputArray = [1, 2, 3, 4, 5, 6, 7, 8];
// function rotateArray(step, inputArray) {
//   for (let i = 1; i <= step; i++) {
//     let removedItem = inputArray.shift();
//     inputArray.push(removedItem);
//   }
//   console.log(inputArray);
// }
// rotateArray(3, inputArray);

// 4) Write a class that prints the list of the first n Fibonacci numbers. The first two Fibonacci numbers are 1 and 1.
// The n+1-st Fibonacci number can be computed by adding the n-th and the n-1-th Fibonacci number.
// The first few are therefore 1, 1, 1+1=2, 1+2=3, 2+3=5, 3+5=8.

class Fibonacci {
  constructor() {
    this.numberOfNumbers = 0;
    this.fibonacciArray = [0, 1];
  }
  setFibonacci(arg) {
    this.numberOfNumbers = arg;
    if (this.numberOfNumbers > 1) {
      for (let i = 2; i <= this.numberOfNumbers; i++) {
        this.fibonacciArray.push(
          this.fibonacciArray[i - 2] + this.fibonacciArray[i - 1]
        );
      }
    }
  }
  //get all
  //get single(index)
  printFibonacci() {
    console.table(this.fibonacciArray);
  } //print powinno być poza obiektem
}
const newFibonacciObject = new Fibonacci();
newFibonacciObject.setFibonacci(11);
newFibonacciObject.setFibonacci(13);
newFibonacciObject.printFibonacci();

// 5) Write a code that takes a number/string and returns a list of its digits. So for 2342 it should return [2,3,4,2].’A243b’ -> [2,4,3].

// const digitList = function(input) {
//   let result = [];
//   let splittedInput = input.split("");
//   splittedInput.forEach(element => {
//     let parsedData = parseInt(element);
//     if (isNaN(parsedData) === false) {
//       result.push(parsedData);
//     }
//   });
//   console.log(splittedInput);
//   console.log(result);
// };
// digitList("52ym3k m4 k0t4");

// 6) Write function that translates a text to Pig Latin and back.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// “The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.
