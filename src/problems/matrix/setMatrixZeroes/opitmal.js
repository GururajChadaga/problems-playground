/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
  Time: O(mn) + O(mn) ~ O(n^2)
  Space: O(1)
 */
const setZeroes = function (matrix) {
  let row0 = 1;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i === 0) row0 = 0;
        else matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) matrix[i][j] = 0;
    }
  }
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[0][0] === 0) matrix[i][0] = 0;
  }
  for (let j = 0; j < matrix[0].length; j++) {
    if (row0 === 0) matrix[0][j] = 0;
  }
};
