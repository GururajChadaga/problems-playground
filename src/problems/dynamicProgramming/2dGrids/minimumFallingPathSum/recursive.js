/**
 * @param {number[][]} matrix
 * @return {number}
 */

/*
Time: O(2^n) exponential
  3 choices at each step: down, diagonalRight, diagonalLeft
  this happens for every element in the matrix.

Space: O(n)
  auxiliary stack space for recustion call for number of rows
*/
const checkFallingPath = (matrix, m, n, row, col) => {
  if (row >= m || col < 0 || col >= n) return Infinity;
  if (row === m - 1) return matrix[row][col];
  return (
    matrix[row][col] +
    Math.min(
      checkFallingPath(matrix, m, n, row + 1, col - 1),
      checkFallingPath(matrix, m, n, row + 1, col),
      checkFallingPath(matrix, m, n, row + 1, col + 1)
    )
  );
};

const minFallingPathSum = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  return Math.min(
    ...matrix[0].map((_, index) => checkFallingPath(matrix, m, n, 0, index))
  );
};
