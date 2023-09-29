/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
Time: O(m*n) 
  number of states calculated.

Space: O((m-1 + (n-1)) + O(mxn)
  O((m-1 + (n-1)) auxiliary stack space for recustion call
  O(mxn) for memo
*/
const checkPaths = (grid, m, n, row, col, memo) => {
  if (row === m - 1 && col === n - 1) return grid[row][col];
  else if (row >= m || col >= n) return Infinity;
  if (memo[row][col] !== -1) return memo[row][col];
  return (memo[row][col] =
    grid[row][col] +
    Math.min(
      checkPaths(grid, m, n, row, col + 1, memo),
      checkPaths(grid, m, n, row + 1, col, memo)
    ));
};
const minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return checkPaths(grid, m, n, 0, 0, memo);
};
