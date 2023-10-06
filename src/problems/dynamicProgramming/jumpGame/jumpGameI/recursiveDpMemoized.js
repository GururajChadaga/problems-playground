/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  Time: O(n^2)
    n = length of nums
  Space O(n) + O(n)
    O(n) for memo
    O(n) for auxiliary stack space for recursion
 */
const checkJumps = (nums, index, memo) => {
  if (index === nums.length - 1) return true;
  else if (index >= nums.length) return false;

  if (memo[index] !== -1) return memo[index];

  let canJump = false;
  for (let i = 1; i <= nums[index]; i++) {
    canJump ||= checkJumps(nums, index + i, memo);
  }
  return (memo[index] = canJump);
};

const canJump = function (nums) {
  const memo = new Array(nums.length).fill(-1);
  return checkJumps(nums, 0, memo);
};
