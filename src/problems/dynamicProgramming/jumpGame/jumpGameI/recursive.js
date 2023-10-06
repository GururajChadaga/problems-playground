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
const checkJumps = (nums, index) => {
  if (index === nums.length - 1) return true;
  else if (index >= nums.length) return false;

  let canJump = false;
  for (let i = 1; i <= nums[index]; i++) {
    canJump ||= checkJumps(nums, index + i);
  }
  return canJump;
};

const canJump = function (nums) {
  return checkJumps(nums, 0);
};
