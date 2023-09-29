/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
Time: O(m*n) 
  number of states calculated.

Space: O((m-1 + (n-1)) + O(mxn)
  O((m-1 + (n-1)) auxiliary stack space for recustion call or the path length
  O(mxn) for memo
*/
const checkPaths = (m, n, row, col, memo) => {
  if (row === m - 1 && col === n - 1) return 1;
  else if (row >= m || col >= n) return 0;
  if (memo[row][col] !== -1) return memo[row][col];
  return (memo[row][col] =
    checkPaths(m, n, row, col + 1, memo) +
    checkPaths(m, n, row + 1, col, memo));
};

const uniquePaths = function (m, n) {
  const memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return checkPaths(m, n, 0, 0, memo);
};

/*
  Alternative approach:
    start from (m-1, n-1) instead of (0,0) and go backwards
*/
const checkPathsAlt = (row, col, memo) => {
  if (row === 0 && col === 0) return 1;
  else if (row < 0 || col < 0) return 0;
  if (memo[row][col] !== -1) return memo[row][col];
  return (memo[row][col] =
    checkPaths(row - 1, col, memo) + checkPaths(row, col - 1, memo));
};

const uniquePathsAlt = function (m, n) {
  const memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return checkPaths(m - 1, n - 1, memo);
};
