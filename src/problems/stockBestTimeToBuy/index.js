/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let left = 0,
    right = 1,
    maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = profit > maxProfit ? profit : maxProfit;
    } else {
      left = right;
    }
    right += 1;
  }
  return maxProfit;
};
