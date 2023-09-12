/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  let currentSum = 0,
    maxSum = -Infinity,
    allNegativeNumbers = true,
    maxNum = -Infinity;
  for (let value of nums) {
    currentSum += value;
    if (currentSum < 0) {
      currentSum = 0;
    }
    maxSum = Math.max(maxSum, currentSum);
    if (allNegativeNumbers && value > 0) {
      allNegativeNumbers = false;
    }
    maxNum = Math.max(maxNum, value);
  }
  return allNegativeNumbers ? maxNum : maxSum;
};
