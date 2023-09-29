/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/*
Time: O(2^(m*n)) exponential
  2 choices at each step: right, down

Space: O((m-1) + (n-1))
  auxiliary stack space for recustion call
*/
const checkPaths = (m, n, row, col) => {
  if (row === m - 1 && col === n - 1) return 1;
  else if (row >= m || col >= n) return 0;
  checkPaths(m, n, row, col + 1) + checkPaths(m, n, row + 1, col);
};

const uniquePaths = function (m, n) {
  return checkPaths(m, n, 0, 0);
};

/*
  Alternative approach:
    start from (m-1, n-1) instead of (0,0) and go backwards
*/
const checkPathsAlt = (row, col) => {
  if (row === 0 && col === 0) return 1;
  else if (row < 0 || col < 0) return 0;
  return checkPaths(row - 1, col) + checkPaths(row, col - 1);
};

const uniquePathsAlt = function (m, n) {
  return checkPaths(m - 1, n - 1);
};
