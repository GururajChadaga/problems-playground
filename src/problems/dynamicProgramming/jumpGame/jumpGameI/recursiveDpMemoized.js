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
const jump = (nums, index, memo) => {
  if (memo[index] !== -1) return memo[index];
  if (index >= nums.length) return false;
  else if (index === nums.length - 1) return true;
  let isMatch = false;
  for (let i = 1; i <= nums[index]; i++) {
    isMatch ||= jump(nums, index + i, memo);
  }
  memo[index] = isMatch;
  return isMatch;
};
const canJump = function (nums) {
  const memo = new Array(nums.length).fill(-1);
  return jump(nums, 0, memo);
};
