// Stwórz za pomocą HTML i JS ruchomy element przesuwający się od lewej do prawej i z powrotem. 
// Element powinien zmieniać background (wartość losowa) co 50px przesunięcia. 
// Klocek powinien mieć ustawioną wysokość i szerokość o wartości 10% aktualnej pozycji.

const square = document.querySelector('#moving_square');
const step = 10; // ustaiwnie kroku przesunięcia kwadratu (w 'px')

let squareSize = 0;
let squarePosition = 0;

//funkcja generująca i ustawiająca losowe kolory w palecie RGB
const setColor = () => {
    let valueRed = Math.round((Math.random()) * 255);
    let valueGreen = Math.round((Math.random()) * 255);
    let valueBlue = Math.round((Math.random()) * 255);
    let squareColor = `rgb(${valueRed},${valueGreen},${valueBlue})`
    // console.log(valueRed, valueGreen, valueBlue, squarePosition) // dodane w celu sprawdzenia poprawności działania
    return square.style.backgroundColor = squareColor;
};

//funkcja ustawiająca wielkość i położenie kwadratu
const squareParameters = () => {
    squareSize = squarePosition / 10;
    return square.style.width = squareSize + 'px',
        square.style.height = squareSize + 'px',
        square.style.left = squarePosition + 'px';
};

//funkcja przesuwająca kwadrat
const moveSquare = () => {
    if (squarePosition >= (window.innerWidth - squareSize - step)) {
        grow = false
    } else if (squarePosition <= 0) {
        grow = true
    };
    if (grow) {
        squarePosition += step;
    } else {
        squarePosition -= step;
    };
    squareParameters();
    if (squarePosition % 50 === 0) {
        setColor();
    };
}

setColor(); //funkcja wywołana w celu ustawienie kolorów początkowych
window.setInterval(moveSquare, 50);