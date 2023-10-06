/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

/*
  Time: O(n)
    n number of states saved: 0 to n
      where n is the amount
  Space: O(n)
    for the memo array
*/
const checkCoinCombinations = (coins, targetAmount, currAmount, memo) => {
  if (currAmount === targetAmount) return 0;
  else if (currAmount > targetAmount) return Infinity;

  if (memo[currAmount] !== -1) return memo[currAmount];
  return (memo[currAmount] =
    1 +
    Math.min(
      ...coins.map((coin) =>
        checkCoinCombinations(coins, targetAmount, currAmount + coin, memo)
      )
    ));
};
const coinChange = function (coins, amount) {
  const memo = new Array(amount + 1).fill(-1);
  const minimumNumberOfCoins = checkCoinCombinations(coins, amount, 0, memo);
  return minimumNumberOfCoins === Infinity ? -1 : minimumNumberOfCoins;
};
