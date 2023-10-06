/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n)
    loop
  Space: O(1)
 */
const maxSubArray = function (nums) {
  let maxSum = 0,
    currTotalSum = 0,
    isAllNegative = true,
    maxNum = -Infinity;
  for (let num of nums) {
    maxNum = Math.max(maxNum, num);
    if (num >= 0) {
      currTotalSum += num;
      isAllNegative = false;
    } else {
      if (currTotalSum + num >= 0) currTotalSum += num;
      else currTotalSum = 0;
    }
    maxSum = Math.max(maxSum, currTotalSum);
  }
  return isAllNegative ? maxNum : maxSum;
};
