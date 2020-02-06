// ARRAY: [1,6,23,8,4,8,3,7]

// 1) OK
// Create a function that returns the sum of all elements 
// passed in array as parameter. Function (array)=>number

// let numbers = [1,6,23,8,4,8,3,7];
// function sumOfAll (numbers) {
//     let result=0;
//     for(let i=0; i<numbers.length; i++){
//         result+=numbers[i];
//     }
//     return result;
// }
// console.log(sumOfAll(numbers));

// 2) OK	
// Create a function that returns sum of first and last elements of given array.

// let numbers = [1,6,23,8,4,8,3,7];
// function sumOfFirstAndLast(numbers) {
//     let x = numbers[0];
//     let y = numbers[numbers.length-1];
//     let result = x+y
//     return result;
//     }
// console.log(sumOfFirstAndLast(numbers));

// 3) OK	
// Create a function that takes a number and return factorial of that number.

// function factorial(x) {
//     let i=1,
//     result=1;
//     while(i<=x){
//          result*=i;
//          i++;
//     } 
//     return result;
// }
// console.log(factorial(6));

// 4) OK	
// Create a function that returns given array in reverse order. 
// no build in functions :)     

// let numbers = [1,6,23,8,4,8,3,7];
// function reverse() {
//     let tempArray = [];
//     while(numbers.length>0){
//         let temp=numbers.pop();
//         tempArray.push(temp);
//         }
//         return tempArray;
// }
// console.log(reverse());

// 4) OK - second version	
// Create a function that returns given array in reverse order. 
// no build in functions :)     

// let numbers = [1,6,23,8,4,8,3,7];
// function reverse() {
//     let tempArray = [];
//     for(let i=(numbers.length-1); i>=0; i--){
//         let temp=numbers[i];
//         tempArray.push(temp);
//         }
//         return tempArray;
// }
// console.log(reverse());


// 5) OK	
// Create a function that based on given array returns new array in pattern 
// [a,b,c,d,e,f] -> [a+b, c+d, e+f]    [1,3,4,1,0,3] => [4,5,3] function(array)=>array

// let numbers = [1,6,23,8,4,8,3,7];
// function sumArray() {
//     let newArray = [];
//     for(let i=0; i<numbers.length; i+=2){
//         newArray.push(numbers[i]+numbers[i+1]);
//         }
//         return newArray;
// }
// console.log(sumArray());

// 6) OK
// For time of this example remove last element from the given array. 
// Create a function that based on given array return new array in pattern 
// [a,b,c,d,e] -> [a+b, c+d, e+e]

// let numbers = [1,6,23,8,4,8,3];
// function sumArray() {
//     let newArray = [];
//     for(let i=0; i<=numbers.length; i+=2){
//         if (i<numbers.length-1) {
//             newArray.push(numbers[i]+numbers[i+1]);
//         }
//         else {
//             newArray.push(numbers[numbers.length-1]*2);
//         } 
//         }
//         return newArray;
// }
// console.log(sumArray());

// 7) OK	
// Create a function the return one random element from given array. 
// use random function 

// let numbers = [1,6,23,8,4,8,3,7];
// function returnRandom() {
//     return numbers[Math.floor(Math.random()*numbers.length)];
// }
// console.log(returnRandom());


// 8) OK	
// Create a function that takes two parameters: array and number off attempts. 
// Based on number of attempts choose a random number from table that many times 
// and return lowest one.

// let numbers = [1,6,23,8,4,8,3,7];
// function lowestFromRandom(array, numOfAttempts) {
//     let arrayWithRandom = [];
//     let minValue = Infinity;
//     for (let i=0; i<numOfAttempts; i++ ) {
//         arrayWithRandom.push(array[Math.floor(Math.random()*array.length)]);
//     };
//     for (i=0; i<=(arrayWithRandom.length-1); i++) {
//         if (arrayWithRandom[i]<minValue) {
//             minValue = arrayWithRandom[i];
//         };
//     }
//     return minValue;
// }
// console.log(lowestFromRandom(numbers, 4));

// 9) OK	
// Create a function that takes given array. 
// Then takes a random element, removes it from the array and pushes it to result arrays. 
// This takes place as long as there are elements in source array. 

// let numbers = [1,6,23,8,4,8,3,7];
// function randomElementsArray(array) {
//     let arrayWithRandom = [];
//     while (array.length>0) {
//         let randomIndex = Math.floor(Math.random()*array.length);
//         let randomElement = array[randomIndex];
//         arrayWithRandom.push(randomElement);
//         array.splice(randomIndex, 1)
//     };
//     return arrayWithRandom;
// }
// console.log(randomElementsArray(numbers));







// 10)	
// Create a function that on given array will perform operation of adding 
// or subtracting elements. Operation is to be chosen at random. 
// And return a result.[a,b,c,d] =>(((a+-b)+-c)+-d)






// 11) OK	
// Create a function that will return the current day name in Polish. 

// function currentDayName() {
//     let days = [
//         "niedziela",
//         "poniedziałek",
//         "wtorek",
//         "sroda",
//         "czwartek",
//         "piatek",
//         "sobota"
//     ];
//     return days[new Date().getDay()];
// }
// console.log(currentDayName());

// 12) OK	
// Create a function that tells us how many days till Friday :)

// function tillFriday() {
//     let dayNumber = new Date().getDay();
//     let result = 5 - dayNumber;
//     if (result>=0) {
//         result=result
//     } else {
//         result=result+7
//     }
//     return console.log('do piatku pozostalo: ',+result,' dni');
// }
// tillFriday()

// 13) OK	
// Create a function that take two numbers and return the object with 4 fields. 
// Result on 4 basic arithmetic operations. 

// function aritmeticFunction(a, b) {
//     return {add: a+b, sub: a-b, multi: a*b, div: a/b};
// };
// console.log(aritmeticFunction(3, 4))