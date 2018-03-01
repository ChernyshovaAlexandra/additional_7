module.exports = function solveSudoku(matrix) {
let matrixClone = matrix;  // приходящая матрица
let numbersToPush = [];
let val;
sudokuSolver([0, 0]); 
// вызывает функцию решения
console.log(matrixClone)
return matrixClone;

// for(let k = 1; k < 10; k++){
//    numbersToPush.push(k);
//   } 
// // пушит номера

//находит ближайщий пустой квадрат, возвращает массив индексов нулей
function emptyCells (indOfMatrix) { //массив индексов пустых ячеек
  let matrixCloneRow, matrixCloneCol, found = false;
  let row = indOfMatrix[0];
  let col = indOfMatrix[1];
  let emptyMatrixClone = [];
  for (let i = col + 9 * row; i < 81; i++ ) {
      matrixCloneRow = Math.floor(i / 9);
      matrixCloneCol = i % 9;     
      if (matrixClone[matrixCloneRow][matrixCloneCol] === 0) {
          found = true;
          emptyMatrixClone.push(matrixCloneRow,matrixCloneCol);
        
          return emptyMatrixClone; // возвращает массив 
      }
  } 
}

 
 // находит подходящие значения 
function findSolvation(emptyMatrixClone) {
  let value, numbersToPush, rowInSector, colInSector;
  let row = emptyMatrixClone[0];
  let col = emptyMatrixClone[1];
  rowInSector = Math.floor( row / 3);
  colInSector = Math.floor( col / 3);
  numbersToPush = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++) {
      value = matrixClone[row][i];
      if (value > 0) {
          if (numbersToPush.indexOf(value) > -1) {
               numbersToPush.splice(numbersToPush.indexOf(value), 1);
          }
      }
  }
  for (let i = 0; i < 9; i++) {
      value = matrixClone[i][col];
      if (value > 0) {
          if ( numbersToPush.indexOf(value) > -1) {
               numbersToPush.splice(numbersToPush.indexOf(value), 1);
          }
      }
  }

//  let rowInSector = Math.floor(row / 3);
//  let colInSector = Math.floor(col / 3);

 for (let i = rowInSector * 3; i < (rowInSector * 3) + 3 ; i++) {
     for (let j = colInSector * 3; j < (colInSector * 3) + 3; j++) {
         value = matrixClone[i][j];
         if (value > 0) {
             if (numbersToPush.indexOf(value) > -1) {
               numbersToPush.splice(numbersToPush.indexOf(value), 1);
          }
         }
     }
 
 }
 return  numbersToPush;
 }

     function sudokuSolver(indOfMatrix) {
      let closestSquare;
      let rowInSquare, calInSquare, valOfCell;
      closestSquare = emptyCells(indOfMatrix);
      if (!closestSquare ) {
          return true;
      }
      else {
          rowInSquare = closestSquare[0];
          calInSquare = closestSquare[1];
          let value = findSolvation(closestSquare);
          
          for (let i = 0; i < value.length; i++) {
              valOfCell = value[i];
              matrixClone[rowInSquare][calInSquare] = valOfCell;
            if (sudokuSolver([rowInSquare, calInSquare])) {
                  return true;
              }
              else {
                  matrixClone[rowInSquare][calInSquare] = 0; 
              }
          }
      }
      return false;     
  }
}
