/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
Time: O(m * n) 
  nested loop

Space: O(m * n)
  2D dp array
*/
const minPathSum = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (row === m - 1 && col === n - 1) dp[row][col] = grid[row][col];
      else {
        const right = col <= n - 2 ? dp[row][col + 1] : Infinity;
        const down = row <= m - 2 ? dp[row + 1][col] : Infinity;
        dp[row][col] = grid[row][col] + Math.min(right, down);
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
const minPathSumSpaceOptimized = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let prevDown = new Array(n).fill(0);
  for (let row = m - 1; row >= 0; row--) {
    let curr = new Array(n).fill(0);
    for (let col = n - 1; col >= 0; col--) {
      if (row === m - 1 && col === n - 1) curr[col] = grid[row][col];
      else {
        const right = col <= n - 2 ? curr[col + 1] : Infinity;
        const down = row <= m - 2 ? prevDown[col] : Infinity;
        curr[col] = grid[row][col] + Math.min(right, down);
      }
    }
    prevDown = curr;
  }
  return prevDown[0];
};
