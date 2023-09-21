/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
  Time: O(number of coins^amount)
  Space: O(1)
*/
const computeCoinCombinations = (amount, coins) => {
  if (amount === 0) return 0;
  else if (amount < 0) return Infinity;
  return (
    1 +
    Math.min(
      ...coins.map((coin) => computeCoinCombinations(amount - coin, coins))
    )
  );
};
const coinChange = function (coins, amount) {
  const minNumberOfCoins = computeCoinCombinations(amount, coins);
  return minNumberOfCoins === Infinity ? -1 : minNumberOfCoins;
};
