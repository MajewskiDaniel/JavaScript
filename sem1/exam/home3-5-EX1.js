// 5) Scale riddle. With 8 balls :) EXAM [1,1,1,1,2,1,1,1]. 
// One of the items will be change to two. Indexes are t be chosen at random. 
// Use compressions only two times. 

const balls = [1, 1, 1, 1, 1, 1, 1, 1];
balls[Math.floor(Math.random() * balls.length)] = 2; // zmiana wagi losowej kuli

//tworzenie tablicy obiektów na podstawie tablicy balls
const ballsObjects = [];
createBallsObjects = function () {
    for (let i = 0; i < balls.length; i++) {
        ballsObjects.push({
            id: i,
            weight: balls[i]
        })
    }
};

//losowanie 3 kul
drawBalls = function (numberOfBalls, ballsObj) {
    let randomBalls = [];
    for (let i = 0; i < numberOfBalls; i++) {
        let index = Math.floor(Math.random() * ballsObj.length);
        let drawnBall = ballsObj.splice(index, 1);
        randomBalls.push(drawnBall[0]);
    }
    return randomBalls;
}

//sumowanie wagi kul
sumOfBallsWeight = function (ballSet) {
    let totalWeight = 0;
    ballSet.forEach((ball) => totalWeight += ball.weight);
    // let totalWeight = ballSet.reduce((acc, ball) => acc += ball.weight); // tak też może być
    return totalWeight;
}

//ważenie 2 kompletów po 3 kule
firsWeighting = function () {
    if (firstThreeBallsWeight > secondThreeBallsWeight) {
        return firstThreeBalls
    } else if (firstThreeBallsWeight < secondThreeBallsWeight) {
        return secondThreeBalls
    } else {
        return ballsObjects
    }
}

//drugie ważenie
secondWeight = function (numberOfBalls, heavySet) {
    firstDraw = drawBalls(numberOfBalls, heavySet);
    secondDraw = drawBalls(numberOfBalls, heavySet);
    firstWeight = sumOfBallsWeight(firstDraw);
    secondWeight = sumOfBallsWeight(secondDraw);
    if (firstWeight > secondWeight) {
        return firstDraw
    } else if (firstWeight < secondWeight) {
        return secondDraw
    } else {
        return heavySet
    }
}

//wywołanie całości
createBallsObjects();
firstThreeBalls = drawBalls(3, ballsObjects);
secondThreeBalls = drawBalls(3, ballsObjects);
firstThreeBallsWeight = sumOfBallsWeight(firstThreeBalls);
secondThreeBallsWeight = sumOfBallsWeight(secondThreeBalls);
heavyBallsSet = firsWeighting();
heavyBall = secondWeight(1, heavyBallsSet);
console.log(`cięższa kula ma index: ${heavyBall[0].id}`)

//sprawdzenie
console.log(balls);
console.log(heavyBall[0]);







// wersja I (stara :P):

// let balls = [1, 1, 1, 1, 1, 1, 1, 1];
// balls[Math.floor(Math.random() * 8)] = 2;

// const heavyBallSearching = function () {
//     if (balls[0] + balls[1] + balls[2] > balls[3] + balls[4] + balls[5]) {
//         if (balls[0] > balls[1]) {
//             console.log('cięższa kula jest pod indeksem: 0')
//         } else if (balls[0] < balls[1]) {
//             console.log('cięższa kula jest pod indeksem: 1')
//         } else {
//             console.log('cięższa kula jest pod indeksem: 2')
//         }
//     } else if (balls[0] + balls[1] + balls[2] < balls[3] + balls[4] + balls[5]) {
//         if (balls[3] > balls[4]) {
//             console.log('cięższa kula jest pod indeksem: 3')
//         } else if (balls[3] < balls[4]) {
//             console.log('cięższa kula jest pod indeksem: 4')
//         } else {
//             console.log('cięższa kula jest pod indeksem: 5')
//         }
//     } else {
//         if (balls[6] > balls[7]) {
//             console.log('cięższa kula jest pod indeksem: 6')
//         } else {
//             console.log('cięższa kula jest pod indeksem: 7')
//         }
//     }
// }
// heavyBallSearching();
// console.log(balls);