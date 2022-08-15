//2D Arrays are used in making games like tic tac toe and much more
// implement a function to make a same rows*colums array
function matrix(rows, col) {
    let mat = new Array(rows)
    for (let i = 0; i < rows; i++) {
        mat[i] = new Array(col).fill('*')
    }
    return mat
}
// let mat1 = matrix(4, 2)
// mat1[0][0]=1
// mat1[0][1]=2
// mat1[0][2]=3
// mat1[0][3]=4

// let fill matrix array with numbers
function fill2DArraysWithNumbers(matrix) {
    let inc = 1
    // console view of 2d array
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            // mat1[i][j]=`row-${i} col-${j}`
            matrix[i][j] = i + inc
            inc++
        }
        inc--
    }
    return matrix
}

let matrix3By3 = matrix(3, 3)
// let matrix3By3 = matrix(4, 5)


// write a function to print 2d array in spiral form
/**
     1 2 3        💔 💫💫💫
     4 5 6   => 1 2 3 6 9 8 7 4 5 6 4
     7 8 9
 */
matrix3By3 = fill2DArraysWithNumbers(matrix3By3)


function printSpiral(matrixArr) {
    // so this sounds tough but let split it into sub problems
    //1-- print top row
    // 2-- then print right col
    // the print bottom row
    // then print left col

    // so start
    var topRow = 0, leftCol = 0,
        bottomRow = matrixArr.length - 1,
        rightCol = matrixArr[0].length - 1;
    // now print firt row
    while (topRow <= bottomRow && leftCol <= rightCol) {
        // now colindex will increase and row will remain same
       // console.log('top row');
        for (let col = leftCol; col <= rightCol; col++) {
            console.log(matrixArr[topRow][col]);
        }
        topRow++

        //'right col');
        for (let row = topRow; row <=bottomRow; row++) {
            console.log(matrixArr[row][rightCol]);
        }
        rightCol--;

        //'bottom row from right to left');
        for (let col = rightCol; col >=0; col--) {
            console.log(matrixArr[bottomRow][col])
        }

        // now print form bottom to top
        bottomRow--;
        if (leftCol<=rightCol) {
            
            for (let row = bottomRow; row >=topRow; row--) {
                console.log(matrixArr[row][leftCol]);
            }
            leftCol++;
        }
    }

}


// printSpiral(matrix3By3)
// console.log(JSON.stringify(matrix3By3, null, 2));

//------------------------- let's implement a tic tac toe game------------------------
// game rules
/**
  if X or O matches in any row or colum or diagonal the letter will win
  for example
  X O O
  - X O
  - O X
  in above matrix the X has won
  same for if O O O appers horinzontally or vertically

  // the give input will be  a matrix board of 3 by 3 
  [
    ['-','X','0'],
    ['X','O','-'],
    ['O','X','-'],
  ]
 */


function ticTacToeGame(matrixBoard,letter) {
    
    // first of all check all rows horizontally if in any row a letter is not same
    let rows=matrixBoard.length
    let cols=matrixBoard[0].length
    let checkRows=false;
    let checkCols=false

    // now check diagonals of matrix
    let checkLeftDiagonal=true
    let checkRightDiagonal=true
    for (let i = 0; i < rows; i++) {
        checkRows=checkRow(matrixBoard[i],letter)  || checkRows
        checkCols=checkCol(matrixBoard,letter,i) || checkCols
        // check left top to right bottom diagonal 
        checkLeftDiagonal =checkLeftDiagonal && (letter === matrixBoard[i][i])
        // console.log(checkLeftDiagonal,matrixBoard[i][i]);
        // check right top to left bottom diagonal 
        checkRightDiagonal=checkRightDiagonal &&  (letter === matrixBoard[i][cols-1-i])
    }

    

    console.log('match cols =>',checkCols);
    console.log('match rows =>',checkRows);
    console.log('match left Diagonal =>',checkLeftDiagonal);
    console.log('match right Diagonal =>',checkRightDiagonal);
    return checkRows || checkCols || checkLeftDiagonal || checkRightDiagonal
}





function checkRow(rowArr,letter) {
  for (let i = 0,len=rowArr.length; i < len; i++) {
    if(rowArr[i]!==letter) return false
  }   
  return true
}

function  checkCol(matrix,letter,colIndex) {
    for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][colIndex]!==letter) {
            return false
        }
    }
    return true
}

let gameMatrix=[
    ['X','X','-'],
    ['O','-','X'],
    ['O','O','O'],
]

let letter='O'
// console.log(ticTacToeGame(gameMatrix,letter))


