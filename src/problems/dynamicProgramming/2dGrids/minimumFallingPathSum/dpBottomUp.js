/**
 * @param {number[][]} matrix
 * @return {number}
 */

/*
Time: O(n * n) + O(n)
  O(n * n) for nested loop
  O(n) to find min

Space: O(m * n)
  2D dp array
*/
const minFallingPathSum = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let row = m - 1; row >= 0; row--) {
    for (col = n - 1; col >= 0; col--) {
      if (row === m - 1) {
        dp[row][col] = matrix[row][col];
        continue;
      }
      const diagonalRight = col <= n - 2 ? dp[row + 1][col + 1] : Infinity;
      const diagonalLeft = col > 0 ? dp[row + 1][col - 1] : Infinity;
      const down = dp[row + 1][col];
      dp[row][col] =
        matrix[row][col] + Math.min(diagonalRight, diagonalLeft, down);
    }
  }
  return Math.min(...dp[0]);
};

/*
Time: O(n * n) + O(n)
  O(n * n) for nested loop
  O(n) to find min

Space: O(n)
  for prevDown array
*/
const minFallingPathSumSpaceOptimized = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let prevDown = new Array(n).fill(0);
  for (let row = m - 1; row >= 0; row--) {
    let curr = new Array(n).fill(0);
    for (col = n - 1; col >= 0; col--) {
      if (row === m - 1) {
        curr[col] = matrix[row][col];
        continue;
      }
      const diagonalRight = col <= n - 2 ? prevDown[col + 1] : Infinity;
      const diagonalLeft = col > 0 ? prevDown[col - 1] : Infinity;
      const down = prevDown[col];
      curr[col] =
        matrix[row][col] + Math.min(diagonalRight, diagonalLeft, down);
    }
    prevDown = curr;
  }
  return Math.min(...prevDown);
};
