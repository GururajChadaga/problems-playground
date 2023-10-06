/**
 * @param {number[]} coins
 * @param {number} targetAmount
 * @return {number}
 */

/*
  Time: O(number of coins^amount) exponential
    at each step, we have as many decisions as the number of coins available
  Space: O(1)
*/
const checkCoinCombinations = (coins, targetAmount, currAmount) => {
  if (currAmount === targetAmount) return 0;
  else if (currAmount > targetAmount) return Infinity;
  return (
    1 +
    Math.min(
      ...coins.map((coin) =>
        checkCoinCombinations(coins, targetAmount, currAmount + coin)
      )
    )
  );
};
const coinChange = function (coins, amount) {
  const minimumNumberOfCoins = checkCoinCombinations(coins, amount, 0);
  return minimumNumberOfCoins === Infinity ? -1 : minimumNumberOfCoins;
};
