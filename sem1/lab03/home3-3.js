// 3) Create an array (by hand) of objects and call sum() function in context of each one of them. 
// Sum function is to come from this object  BaseObject = { X,y, sum: function (){ return this.x+this.y}} 
// Example array: [{x:2,y:3},{x:-1,x:6,{x:0,x:8},…..]


const myArrayOfObjects = [{x:2,y:3},{x:-1,y:6},{x:0,y:-8},{x:7, y:1},{x:17, y:32}];
const baseObject = {x:0 ,y:0 , sum: function (){return this.x+this.y}};
// arrayOfResults = myArrayOfObjects.forEach(BaseObject.sum(this.x, this.y));
const myArrayOfResults = [];
for (let i=0; i<myArrayOfObjects.length; i++) {
    baseObject.x = myArrayOfObjects[i].x;
    baseObject.y = myArrayOfObjects[i].y;
    myArrayOfResults.push(baseObject.sum());
}
console.log(`Array with results of summary: ${myArrayOfResults}`);
