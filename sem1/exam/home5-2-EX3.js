const sudoku = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [0, 0, 9, 4, 3, 0, 5, 0, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

sudokuSolver = function (sudoku) {
    for (nestedRows = 0; nestedRows < sudoku.length; nestedRows++) {
        while (sudoku[nestedRows].includes(0) === true) {
            for (let row = 0; row < sudoku.length; row++) {
                for (let column = 0; column < sudoku.length; column++) {
                    if (sudoku[row][column] === 0) {
                        let usedNumbers = [];
                        for (i = 0; i < 9; i++) {
                            if (sudoku[row][i] > 0) {
                                usedNumbers.push(sudoku[row][i])
                            }
                            if (sudoku[i][column] > 0) {
                                usedNumbers.push(sudoku[i][column]);
                            }
                        }
                        for (let rowBox = Math.floor(row / 3) * 3; rowBox < Math.floor(row / 3) * 3 + 3; rowBox++) {
                            for (let columnBox = Math.floor(column / 3) * 3; columnBox < Math.floor(column / 3) * 3 + 3; columnBox++) {
                                if (sudoku[rowBox][columnBox] > 0) {
                                    usedNumbers.push(sudoku[rowBox][columnBox]);
                                }
                            }
                        }
                        usedNumbers = usedNumbers.filter((value, index, array) => {
                            return array.indexOf(value) === index
                        });
                        // usedNumbers = Array.from(new Set(usedNumbers));  // można też tak
                        // usedNumbers = [...new Set(usedNumbers)]; // można też tak
                        // console.log(usedNumbers);
                        if (usedNumbers.length === 8) {
                            for (i = 1; i < 10; i++) {
                                if (usedNumbers.includes(i) === false) {
                                    sudoku[row][column] = i;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

sudokuSolver(sudoku);
sudoku.forEach(row => {
    console.log(row)
}); // dlaczego czasami console.log nie drukuje po koleii? tak jakby asynchronicznie?
// console.log(sudoku);