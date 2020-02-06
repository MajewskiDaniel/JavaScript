// 2) Create four function definitions. One for every basic math operations and taking two input parameters. 
// Create one more function. This function is to return calculation object. This object is to have parameters 
// object field that holds two operation parameters inside (x and y) and a function field that points to a function 
// with math operation (defined at the beginning). A function setOperation() that sets the field from previous 
// sentence and a calculate() function that makes calculation and returns its value. 

const add = function(x,y) {
    return x+y;
};
const sub = function(x,y) {
    return x-y;
};
const multi = function(x,y) {
    return x*y;
};
const div = function(x,y) {
    return x/y;
};
const calculator = function() {
    return {
        x: '',
        y: '',
        operation: '',
        setOperation: function(a, b, op) {
            x = a;
            y = b;
            operation = op;
        },
        calculate: function() {
            return operation(x,y)
        }
    }
};
calculator().setOperation(3, 14, multi);
calculator().calculate();
console.log(calculator().calculate())





// add = (a,b) => a+b;
// sub = (a,b) => a-b;
// div = (a,b) => a/b;
// multi = (a,b) => a*b;
// const calc = function(){  
//     return  {
//         x : 0,
//         y : 0,
//         op : '',
//         setOperation : function(a,b,c){
//             this.x = a;
//             this.y = b;
//             this.op = c;
//         },
//         calculate : function () { 
//             return this.op(this.x,this.y);
//         }       
//     }
// }
// let calculator = calc();
// calculator.setOperation(5,10,multi);
// console.log(calculator.calculate());







// const add = function(x,y){
//     return x + y;
// }
// const subtract = function(x,y){
//     return x - y;
// }
// const multiply = function(x,y){
//     return x * y;
// }
// const divide = function(x,y){
//     return x / y;
// }

// const calculator = (function(){
//     let x, y, operator;
//     return {
//         setOperation: function(setX, setY, setOperator){
//             x = setX;
//             y = setY;
//             operator = setOperator;
//         },
//         calculate: function() {
//             return `Calculation result: ${operator(x,y)}`;
//         }
//     }
// })();

// calculator.setOperation(5,2,multiply);
// console.log(calculator.calculate())