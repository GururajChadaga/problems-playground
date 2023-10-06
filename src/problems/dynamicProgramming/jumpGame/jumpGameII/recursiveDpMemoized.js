/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n^2)
    n = length of nums
  Space O(n) + O(n)
    O(n) for memo
    O(n) for auxiliary stack space for recursion
 */
const checkJumps = (nums, index, memo) => {
  if (index === nums.length - 1) return 0;
  else if (index >= nums.length) return Infinity;

  if (memo[index] !== -1) return memo[index];
  let jumpCount = Infinity;
  for (let i = 1; i <= nums[index]; i++) {
    jumpCount = Math.min(jumpCount, checkJumps(nums, index + i, memo));
  }
  return (memo[index] = ++jumpCount);
};

const jump = function (nums) {
  const memo = new Array(nums.length).fill(-1);
  return checkJumps(nums, 0, memo);
};
