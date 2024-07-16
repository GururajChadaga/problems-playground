/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

/*
  Time: O(n)
    loop
  Space: O(1)
 */
const twoSumII = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [++left, ++right];
    }
  }
};
