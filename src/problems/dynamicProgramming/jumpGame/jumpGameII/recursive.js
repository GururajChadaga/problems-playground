/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(k^n)
    k = average of array values
      number of decisions(jumps) in decision tree
    n = length of nums
      decisions applied on n elements
  Space O(n) for auxiliary stack space for recursion
 */
const checkJumps = (nums, index, jumpCount) => {
  if (index === nums.length - 1) return jumpCount;
  if (index >= nums.length) return Infinity;
  let jumps = Infinity;
  for (let i = 1; i <= nums[index]; i++) {
    jumps = Math.min(jumps, checkJumps(nums, index + i, jumpCount + 1));
  }
  return jumps;
};
const jump = function (nums) {
  return checkJumps(nums, 0, 0);
};
