// 4) Given an array of objects, for each object call operation() function in context of next object. 
// If object is last, got back to start of the array for operation function. In loop;
// GRAFIKA w pliku
//

arrayOfObjects = [
    {
        x: 1,
        y: ' object one value ',
        opperation: function() {return 'object one prefix ' + this.x + this.y}
    },
    {
        x: 2,
        y: ' object two value ',
        opperation: function() {return 'object two prefix ' + this.x + this.y}
    },
    {
        x: 3,
        y: ' object three value ',
        opperation: function() {return 'object three prefix ' + this.x + this.y}
    }
];
for (let i=0; i<arrayOfObjects.length; i++) {
        console.log(arrayOfObjects[i].opperation.call(arrayOfObjects[(i+1)%arrayOfObjects.length]));
};

