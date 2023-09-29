/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*
Given, m x n is the size of the obstacleGrid
Time: O(2^(m*n)) exponential
  2 choices at each step: right, down

Space: O((m-1) + (n-1))
  auxiliary stack space for recustion call
*/
const checkPaths = (obstacleGrid, m, n, row, col) => {
  if (row === m - 1 && col === n - 1) return 1;
  else if (row >= m || col >= n) return 0;
  if (obstacleGrid[row][col] === 1) return 0;
  return (
    checkPaths(obstacleGrid, m, n, row, col + 1) +
    checkPaths(obstacleGrid, m, n, row + 1, col)
  );
};
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  return checkPaths(obstacleGrid, m, n, 0, 0);
};
