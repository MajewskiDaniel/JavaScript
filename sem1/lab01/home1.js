//homework
//1 Years
//  let table = [1974, 1900, 1985, 2000];
//  let n;
//  for(let i=0; i<table.length; i++){
//      n = table[i];
//      if((n%4==0 && n%100!=0) || n%400==0) {
//         console.log(n);
//      }
//     }


//2) 7!
// let n = 7,
//       summary = 1
// while( n > 0 ){
//     summary = summary * n--;
//    }
// console.log(summary);

//2) 7! (2 sposób)
// let i=1,
// result =1;
// while(i<=7){
//     result = result * i;
//     i++;
// }
// console.log(result);

//3) Odd Numbers
//  let table = [1,6,23,8,4,98,3,7,3,98,4,98];
//  let n;
//  let result=0;
//  for(let i=0; i<table.length; i++){
//      n = table[i];
//      if(n%2!=0){
//          result = result+n;
//      }
//  }
//  console.log(result);


//4) Highest and Lowest, one loop
//  let table = [1,6,23,8,4,98,3,7,3,98,4,98];
//  let n;
//  let highest=-Infinity;
//  let lowest=Infinity;
//  for(let i=0; i<table.length; i++){
//      n = table[i];
//      if(n>highest){
//          highest = n;
//      }
//      if(n<lowest){
//          lowest = n;
//      }
//  }
//  console.log('highest ', highest);
//  console.log('lowest ', lowest);

//5 Longest String
// let table = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend'];
// let result=0;
// let n;
// for(let i=0; i<table.length; i++){
//          n = table[i];
//          if(n.length>=result){
//              result = n.length;
//          }
//      }
//      console.log(result);

//6 indexes of the highest value
//  let table = [1,6,23,8,4,98,3,7,3,98,4,98];
//  let n;
//  let highest=-Infinity;
//  let result
//  for(let i=0; i<table.length; i++){
//      n = table[i];
//      if(n>=highest){
//          highest = n;
//      }
//   }
//  for(let i=0; i<table.length; i++){
//     n = table[i];
//     if(n==highest){
//         result = i;
//         console.log(result);
//     }
//  }

//7 Average of even
//  let table = [1,6,23,8,4,98,3,7,3,98,4,98];
//  let n;
//  let summary=0;
//  let result;
//  let x=0;
//  for(let i=0; i<table.length; i++){
//      n = table[i];
//      if(n%2==0){
//          summary = summary+n;
//          x==x++;
//      }
//  }
//  console.log('summary =',summary);
//  console.log('number of evens =',x);
//  result = (summary/x);
//  console.log('result =',result);

//8 Average value of items at even indexes
//  let table = [1,6,23,8,4,98,3,7,3,98,4,98];
//  let n;
//  let summary=0;
//  let result;
//  let x=0;
//  for(let i=0; i<table.length; i++){
//      n = table[i];
//      if(i%2==0 && i!=0){
//          summary = summary+n;
//          x==x++;
//      }
//  }
//  console.log('summary =',summary);
//  console.log('number of evens =',x);
//  result = (summary/x);
//  console.log('result =',result);

//9 Add even and subtract odd
//  let table = [1,6,23,8,4,98,3,7,3,98,4,98];
//  let result=0;
//  for(let i=0; i<table.length; i++){
//      let n = table[i];
//      if(n%2==0){
//          result = result+n;
//      }
//      else {
//          result = result-n;
//      }
//  }
//  console.log('result =',result);

