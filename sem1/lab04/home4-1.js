// 1) OK
// Extend String type with the reverse() function. The function is to reverse the value of the string on which it was called.

let stringTypeData = 'Daniel Majewski';

const reverseString = function (entryString) {
    if (typeof entryString === 'string') {
        return entryString.split('').reverse().join('');
    } else {
        return console.log('you must enter string type data');
    }
}

console.log(reverseString(stringTypeData));
console.log(typeof reverseString(stringTypeData));