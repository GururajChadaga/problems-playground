/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
  Time: O(n)
  Space: O(n)
*/
const computeCoinCombinations = (amount, coins, memo) => {
  if (memo[amount]) return memo[amount];
  let result;
  if (amount === 0) result = 0;
  else if (amount < 0) result = Infinity;
  else
    result =
      1 +
      Math.min(
        ...coins.map((coin) =>
          computeCoinCombinations(amount - coin, coins, memo)
        )
      );
  memo[amount] = result;
  return result;
};
const coinChange = function (coins, amount) {
  const minNumberOfCoins = computeCoinCombinations(
    amount,
    coins,
    Array(amount + 1)
  );
  return minNumberOfCoins === Infinity ? -1 : minNumberOfCoins;
};
