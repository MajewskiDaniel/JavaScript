// 4) Create a solution that will tell us what poker set we have. 
// The solution is to deal us 5 cards from the standard 52 card deck. 
// After that the solution is to tell us what is the best poker set. EXAM

// // sprawdzenie ręczne (1=spade / 2=heart / 3=club / 4=diamond)
// // (11=Jack / 12=Queen / 13=King / 14=Ace)
// 
// ourHand = [{
//         rank: 6,
//         suit: 1
//     },
//     {
//         rank: 7,
//         suit: 1
//     },
//     {
//         rank: 10,
//         suit: 1
//     },
//     {
//         rank: 8,
//         suit: 1
//     },
//     {
//         rank: 9,
//         suit: 1
//     },
// ]


// pusta talia kart
const cardDeck = []

// deklaracja klasy Card
class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
    changeRank(newRank) {
        this.rank = newRank
    }
    changeSuit(newSuit) {
        this.suit = newSuit
    }
}

// Tworzenie liczbowej talii kart 
createCardDeck = function () {
    for (let i = 2; i <= 14; i++) {
        for (let j = 1; j <= 4; j++) {
            let card = new Card(i, j)
            cardDeck.push(card)
        }
    }
}

// losowanie 5 kart
drawFiveCards = function () {
    let fiveCards = [];
    for (let i = 0; i < 5; i++) {
        let index = Math.floor(Math.random() * cardDeck.length);
        let card = cardDeck.splice(index, 1);
        fiveCards.push(card[0]);
    }
    return fiveCards;
}

// pokazanie 5 wylosowanych kart
const showOurHand = () => ourHand.forEach((card) => console.log(card));

// sortowanie kart wg figur
const sortOurHandByRank = () => ourHand.sort((a, b) => a.rank - b.rank);

// deklaracje układów:
//sprawdzenie pokera
straightFlush = function () {
    let flag = false;
    let counter = 0;
    let color = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if ((ourHand[i].rank + 1) === ourHand[i + 1].rank) {
            counter == counter++
        } else {
            break
        }
    }
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if ((ourHand[i].suit) === ourHand[i + 1].suit) {
            color == color++
        } else {
            break
        }
    }
    if (counter == 4 && color == 4) {
        flag = true;
    }
    return flag
}

//sprawdzenie karety
fourOfAKind = function () {
    let flag = false;
    let counter = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if ((ourHand[i].rank) === ourHand[i + 1].rank) {
            counter == counter++
        }
    }
    if (counter == 3 && (ourHand[2].rank === ourHand[3].rank === ourHand[4].rank)) {
        flag = true;
    }
    return flag
}

//sprawdzenie fula
fullHouse = function () {
    let flag = false;
    let counter = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if ((ourHand[i].rank) === ourHand[i + 1].rank) {
            counter == counter++
        }
    }
    if (counter == 3) {
        flag = true;
    }
    return flag
}

// sprawdzenie koloru
flush = function () {
    let flag = false;
    let color = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if ((ourHand[i].suit) === ourHand[i + 1].suit) {
            color == color++
        } else {
            break
        }
    }
    if (color == 4) {
        flag = true;
    }
    return flag
}

// sprawdzenie strita
straight = function () {
    let flag = false;
    let counter = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if ((ourHand[i].rank + 1) === ourHand[i + 1].rank) {
            counter == counter++
        } else {
            break
        }
    }
    if (counter == 4) {
        flag = true;
    }
    return flag
}

// sprawdzenie trójki
threeOfAKind = function () {
    let flag = false;
    let counter = 0;
    for (let i = 0; i < (ourHand.length - 2); i++) {
        if (ourHand[i].rank === ourHand[i + 1].rank && ourHand[i + 1].rank === ourHand[i + 2].rank) {
            counter == counter++
        }
    }
    if (counter == 1) {
        flag = true;
    }
    return flag
}

// sprawdzenie 2 par
twoPair = function () {
    let flag = false;
    let counter = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if (ourHand[i].rank === ourHand[i + 1].rank)
            counter == counter++
    }
    if (counter == 2) {
        flag = true;
    }
    return flag;
}

// sprawdzenie pary
onePair = function () {
    let flag = false;
    let counter = 0;
    for (let i = 0; i < (ourHand.length - 1); i++) {
        if (ourHand[i].rank === ourHand[i + 1].rank)
            counter == counter++
    }
    if (counter == 1) {
        flag = true;
    }
    return flag;
}

// Przypisanie kartom figur i kolorów
changeCardNames = function () {
    ourHand.forEach((card) => {
        if (card.suit === 1) {
            card.changeSuit('spade')
        } else if (card.suit === 2) {
            card.changeSuit('heart')
        } else if (card.suit === 3) {
            card.changeSuit('club')
        } else {
            card.changeSuit('diamond')
        }
    })
    ourHand.forEach((card) => {
        if (card.rank === 14) {
            card.changeRank('Ace')
        } else if (card.rank === 11) {
            card.changeRank('Jack')
        } else if (card.rank === 12) {
            card.changeRank('Queen')
        } else if (card.rank === 13) {
            card.changeRank('King')
        }
    })
}

// sprawdzenie jaki najwyższy układ mamy na ręku
whatIsMyHand = function () {
    if (isStraightFlush === true) console.log(`Your highest poker hand set is: Straight Flush`)
    else if (isFourOfAKind === true) console.log(`Your highest poker hand set is: Four of a Kind`)
    else if (isFullHouse === true) console.log(`Your highest poker hand set is: Full House`)
    else if (isFlush === true) console.log(`Your highest poker hand set is: Flush`)
    else if (isStraight === true) console.log(`Your highest poker hand set is: Straight`)
    else if (isThreeOfAKind === true) console.log(`Your highest poker hand set is: Three of a Kind`)
    else if (isTwoPair === true) console.log(`Your highest poker hand set is: Two Pair`)
    else if (isOnePair === true) console.log(`Your highest poker hand set is: One Pair`)
    else console.log(`Your highest poker hand set is: High Card`)
}

// wywołanie całości
createCardDeck();
ourHand = drawFiveCards();
sortOurHandByRank();
const isStraightFlush = straightFlush();
const isFourOfAKind = fourOfAKind();
const isFullHouse = fullHouse();
const isFlush = flush();
const isStraight = straight();
const isThreeOfAKind = threeOfAKind();
const isTwoPair = twoPair();
const isOnePair = onePair();
whatIsMyHand();
changeCardNames();
showOurHand();