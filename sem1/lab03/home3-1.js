// 1) Create an iffe that returns an object with fields: function setValue(), function showValue() 
// and function reverseValue(). Calling functions either logs the value or reverse it in an object. 
// If value was not provided yet or is empty showValue function is to return information about that. 
// Value can be type string or number. reverseValue():  If number do (*(-1)), if string reverse it.  
// Closure pattern.

const iifeReturnObject = (function() {
    let value;
    const setValue = function(newValue) {
        if (newValue !== undefined) {
            return value = newValue;
        } else {
            console.log('value not provided');
        }
    };
    const showValue = function() {
        if (value !== undefined) {
            console.log(value);
        } else {
            console.log('value not provided');
        }
    };
    const reverseValue = function() {
        if (value === undefined) {
            console.log('value not provided');
        } else if (typeof value === 'number') {
            return value = value*(-1);
        } else {
            let splittedValue = value.split("");
            let reversedValue = splittedValue.reverse();
            value = reversedValue.join("");
        }

    };
    return {setValue, showValue, reverseValue};
})();
iifeReturnObject.setValue('ADHD');
iifeReturnObject.showValue();
iifeReturnObject.reverseValue();
iifeReturnObject.showValue();