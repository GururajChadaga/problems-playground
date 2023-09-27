/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  Time: O(k^n)
    k = average of array values
      number of decisions(jumps) in decision tree
    n = length of nums
      decisions applied on n elements
  Space O(n) for auxiliary stack space for recursion
 */
const jump = (nums, index) => {
  if (index >= nums.length) return false;
  else if (index === nums.length - 1) return true;
  let isMatch = false;
  for (let i = 1; i <= nums[index]; i++) {
    isMatch ||= jump(nums, index + i);
  }
  return isMatch;
};
const canJump = function (nums) {
  return jump(nums, 0);
};
