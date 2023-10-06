/**
 * @param {number} n
 * @return {number}
 */

/**
 * @param {number} n
 * @return {number}
 */

/*
  Time: O(n)
    loop
  Space: O(n)
    dp array
*/
const climbStairs = function (n) {
  const dp = new Array(n + 1).fill(0);
  (dp[n] = 1), (dp[n - 1] = 1);
  for (let i = n - 2; i >= 0; i--) {
    dp[i] = dp[i + 1] + dp[i + 2];
  }
  return dp[0];
};

/*
  Time: O(n)
    for loop
  Space: O(1)
*/
const climbStairsSpaceOptimized = function (n) {
  let next = 1,
    next2 = 1;
  for (let i = n - 2; i >= 0; i--) {
    const curr = next + next2;
    next2 = next;
    next = curr;
  }
  return next;
};
