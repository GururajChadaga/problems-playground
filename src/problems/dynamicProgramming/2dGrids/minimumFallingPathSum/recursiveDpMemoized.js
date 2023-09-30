/**
 * @param {number[][]} matrix
 * @return {number}
 */

/*
Time: O(m * n) + O(n)
  number of states
  O(n) to find min

Space: O(n) + O(m * n)
  auxiliary stack space for recustion call for number of rows
  O(m * n) for the memo array
*/
const checkFallingPath = (matrix, m, n, row, col, memo) => {
  if (row >= m || col < 0 || col >= n) return Infinity;
  if (row === m - 1) return matrix[row][col];

  if (memo[row][col] !== -1) return memo[row][col];
  return (memo[row][col] =
    matrix[row][col] +
    Math.min(
      checkFallingPath(matrix, m, n, row + 1, col - 1, memo),
      checkFallingPath(matrix, m, n, row + 1, col, memo),
      checkFallingPath(matrix, m, n, row + 1, col + 1, memo)
    ));
};

const minFallingPathSum = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return Math.min(
    ...matrix[0].map((_, index) =>
      checkFallingPath(matrix, m, n, 0, index, memo)
    )
  );
};
