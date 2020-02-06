// 2) OK 
// Extend Number type with the reverse() function. The function is to reverse the value of the Number on which it was called.

let numberTypeData = -123.45;

const reverseNumber = function (entryNumber) {
        if (typeof entryNumber == 'number') {
                return parseFloat((entryNumber + '').split('').reverse().join('')) * Math.sign(entryNumber);
        } else {
                console.log('you must enter number type data')
        }
}
console.log(reverseNumber(numberTypeData));
console.log(typeof reverseNumber(numberTypeData));