// 1) Show a result of Josephus Problem for 7 soldiers.
// a. 1 Kills 2
// b. 3 Kills 4
// c. 5 Kills 6
// d. 7 Kills 1
// e. 3 Kills 5
// f. 7 Kills 3
// g. 7 Remains alive

// n - liczba żołnierzy
const n = 7;
// s - postąpienie
const s = 2;

// tablica żołnierzy
const soldiersArray = [];
allSoldiers = n => {
  for (let i = 1; i <= n; i++) {
    soldiersArray.push(i);
  }
};

// usuwanie żołnierzy

soldiersElimination = s => {
  while (soldiersArray.length > 1) {
    for (let i = 0; i < soldiersArray.length; i = i + s - 1) {
      soldiersArray.splice((i + s - 1) % soldiersArray.length, 1);
    }
  }
};

// wywołanie

allSoldiers(n);
console.log(soldiersArray);
soldiersElimination(s);
console.log(soldiersArray);
