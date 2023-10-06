// Time: O(number of coins * amount)
// Space: O(amount )
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
  Time: O(n)
    for loop
  Space: O(n)
    for the dp array
    can't be space optimized as SC will be O(n) if coins.length >= amount
*/
const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(0);
  for (let i = amount - 1; i >= 0; i--) {
    dp[i] =
      1 +
      Math.min(
        ...coins.map((coin) => (i + coin <= amount ? dp[i + coin] : Infinity))
      );
  }
  return dp[0] === Infinity ? -1 : dp[0];
};
