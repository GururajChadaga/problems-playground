/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
Time: O(2^(m*n)) exponential
  2 choices at each step: right, down

Space: O((m-1) + (n-1))
  auxiliary stack space for recustion call
*/
const checkPaths = (grid, m, n, row, col) => {
  if (row === m - 1 && col === n - 1) return grid[row][col];
  else if (row >= m || col >= n) return Infinity;
  return (
    grid[row][col] +
    Math.min(
      checkPaths(grid, m, n, row, col + 1),
      checkPaths(grid, m, n, row + 1, col)
    )
  );
};
const minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  return checkPaths(grid, m, n, 0, 0);
};
