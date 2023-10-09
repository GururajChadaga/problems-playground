/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
  Time: O(mn) + O(m + n) + O(mn) ~ O(n^3)
  Space: O(1)
 */
const markRows = (matrix, i) => {
  for (let j = 0; j < matrix[0].length; j++) {
    if (matrix[i][j] !== 0) matrix[i][j] = -1;
  }
};
const markCols = (matrix, j) => {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][j] !== 0) matrix[i][j] = -1;
  }
};

const setZeroes = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        markRows(matrix, i);
        markCols(matrix, j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === -1) matrix[i][j] = 0;
    }
  }
};
