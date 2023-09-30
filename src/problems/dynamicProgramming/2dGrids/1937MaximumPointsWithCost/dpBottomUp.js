/**
 * @param {number[][]} points
 * @return {number}
 */
/*
  Time: O(n*m*m)
*/
const maxPoints = function (points) {
  const m = points.length,
    n = points[0].length;
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      if (row === m - 1) {
        dp[row][col] = points[row][col];
        continue;
      }
      dp[row][col] =
        points[row][col] +
        Math.max(
          ...dp[row + 1].map(
            (_, index) => dp[row + 1][index] - Math.abs(col - index)
          )
        );
    }
  }
  return Math.max(...dp[0]);
};

//TODO: optimize to O(m*n)
