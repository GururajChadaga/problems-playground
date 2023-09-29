// Time: O(number of coins * amount)
// Space: O(amount )
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = function (coins, amount) {
  const numberOfCoins = Array(amount + 1).fill(Infinity);
  numberOfCoins[0] = 0;
  for (let i = 1; i <= amount; i++) {
    numberOfCoins[i] = Math.min(
      ...coins.map((coin) => {
        return i - coin >= 0 ? numberOfCoins[i - coin] + 1 : Infinity;
      })
    );
  }
  return numberOfCoins[amount] != Infinity ? numberOfCoins[amount] : -1;
};
