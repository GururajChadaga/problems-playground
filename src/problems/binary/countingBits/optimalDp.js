/**
 * @param {number} n
 * @return {number[]}
 */
/*
  Time: O(n)
  Space: O(1)
*/
const countBits = function (n) {
  const dp = Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (offset * 2 === i) offset = i;
    dp[i] = 1 + dp[i - offset];
  }
  return dp;
};
