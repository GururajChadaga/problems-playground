/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
Time: O(m * n) 
  nested loop

Space: O(m * n)
  2D dp array
*/
const uniquePaths = function (m, n) {
  const dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
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
  for prevDownArray. we reduced SC from O(m * n) to O(n)
*/
const uniquePathsSpaceOptimized = function (m, n) {
  let prevDown = new Array(n).fill(0);
  for (let row = m - 1; row >= 0; row--) {
    let curr = new Array(n).fill(0);
    for (let col = n - 1; col >= 0; col--) {
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

/*
  Alternative approach:
    start from (m-1, n-1) instead of (0,0) and go backwards bottomUP
*/
const uniquePathsAlt = function (m, n) {
  const dp = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  for (let row = 0; row <= m - 1; row++) {
    for (let col = 0; col <= n - 1; col++) {
      if (row === 0 && col === 0) dp[row][col] = 1;
      else {
        const left = col > 0 ? dp[row][col - 1] : 0;
        const up = row > 0 ? dp[row - 1][col] : 0;
        dp[row][col] = left + up;
      }
    }
  }
  return dp[m - 1][n - 1];
};

const uniquePathsAltSpaceOptimized = function (m, n) {
  let prevUp = new Array(n).fill(0);
  for (let row = 0; row <= m - 1; row++) {
    let curr = new Array(n).fill(0);
    for (let col = 0; col <= n - 1; col++) {
      if (row === 0 && col === 0) curr[col] = 1;
      else {
        const left = col > 0 ? curr[col - 1] : 0;
        const up = row > 0 ? prevUp[col] : 0;
        curr[col] = left + up;
      }
    }
    prevUp = curr;
  }
  return prevUp[n - 1];
};
