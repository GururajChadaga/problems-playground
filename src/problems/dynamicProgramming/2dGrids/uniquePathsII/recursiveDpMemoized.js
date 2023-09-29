/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*
Time: O(m*n) 
  number of states calculated.

Space: O((m-1 + (n-1)) + O(mxn)
  O((m-1 + (n-1)) auxiliary stack space for recustion call or the path length
  O(mxn) for memo
*/
const checkPaths = (obstacleGrid, m, n, row, col, memo) => {
  if (row >= m || col >= n) return 0;
  else if (obstacleGrid[row][col] === 1) return 0;
  else if (row === m - 1 && col === n - 1) return 1;

  if (memo[row][col] !== -1) return memo[row][col];

  return (memo[row][col] =
    checkPaths(obstacleGrid, m, n, row, col + 1, memo) +
    checkPaths(obstacleGrid, m, n, row + 1, col, memo));
};
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return checkPaths(obstacleGrid, m, n, 0, 0, memo);
};
