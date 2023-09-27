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
const checkJumps = (nums, index, memo, jumpCount) => {
  if (index === nums.length - 1) return jumpCount;
  if (index >= nums.length) return 0;
  if (memo[index] !== -1) return memo[index];

  let jumps = Infinity;
  for (let i = 1; i <= nums[index]; i++) {
    const abc = checkJumps(nums, index + i, memo, jumpCount);
    jumps = Math.min(jumps, abc);
  }
  memo[index] = jumps + 1;
  return jumps + 1;
};
const jump = function (nums) {
  const memo = new Array(nums.length + 1).fill(-1);
  return checkJumps(nums, 0, memo, 0);
};
