/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let left = 0,
    right = 1,
    maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    } else left = right;
    right += 1;
  }
  return maxProfit;
};

/* **************************************************** */
/*
  Two-pass solution:
    1st pass to compute suffixMax array
    2nd pass to compute maxProfit using suffixMax
  on any given day i of purchase,
    maxProfit = max(prices[i+1]...prices[n])
  hence, use suffixMax array to find maxProfit for any given day i
 */
const getSuffixMax = (arr) => {
  const suffixMax = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[arr.length - 1 - i]);
    suffixMax.unshift(max);
  }
  return suffixMax;
};
const maxProfitTwoPass = function (prices) {
  const suffixMax = getSuffixMax(prices);
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    const profit = suffixMax[i] - prices[i] < 0 ? 0 : suffixMax[i] - prices[i];
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};

/* **************************************************** */
/*
  One-pass solution:
    Calculate maxProfit while calculating suffixMax
      this works as for any i, suffixMax from i+1...n is known at that iteration
 */

const maxProfitOnePass = function (prices) {
  let maxProfit = 0,
    maxPriceFromRight = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    maxPriceFromRight = Math.max(maxPriceFromRight, prices[i]);
    const profit = maxPriceFromRight - prices[i];
    maxProfit = Math.max(maxProfit, profit);
  }
  return maxProfit;
};
