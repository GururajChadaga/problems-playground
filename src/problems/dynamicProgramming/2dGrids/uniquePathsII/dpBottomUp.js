/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/*
Given, m x n is the size of the obstacleGrid
Time: O(m * n) 
  nested loop

Space: O(m * n)
  2D dp array
*/
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (obstacleGrid[row][col] === 1) {
        dp[row][col] = 0;
        continue;
      }
      if (row === m - 1 && col === n - 1) dp[row][col] = 1;
      else {
        const right = col <= n - 2 ? dp[row][col + 1] : 0;
        const down = row <= m - 2 ? dp[row + 1][col] : 0;
        dp[row][col] = right + down;
      }
    }
  }
  return dp[0][0];
};

/*
Time: O(m * n) 
  nested loop

Space: O(n)
  for prevDown Array. we reduced SC from O(m * n) to O(n)
*/
const uniquePathsWithObstaclesSpaceOptimized = function (obstacleGrid) {
  const m = obstacleGrid.length,
    n = obstacleGrid[0].length;
  let prevDown = new Array(n).fill(0);
  for (let row = m - 1; row >= 0; row--) {
    let curr = new Array(n).fill(0);
    for (let col = n - 1; col >= 0; col--) {
      if (obstacleGrid[row][col] === 1) {
        curr[col] = 0;
        continue;
      }
      if (row === m - 1 && col === n - 1) curr[col] = 1;
      else {
        const right = col <= n - 2 ? curr[col + 1] : 0;
        const down = row <= m - 2 ? prevDown[col] : 0;
        curr[col] = right + down;
      }
    }
    prevDown = curr;
  }
  return prevDown[0];
};
