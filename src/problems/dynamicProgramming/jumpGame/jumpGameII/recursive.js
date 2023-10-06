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
const checkJumps = (nums, index) => {
  if (index === nums.length - 1) return 0;
  else if (index >= nums.length) return Infinity;

  let jumpCount = Infinity;
  for (let i = 1; i <= nums[index]; i++) {
    jumpCount = Math.min(jumpCount, checkJumps(nums, index + i));
  }
  return ++jumpCount;
};

const jump = function (nums) {
  return checkJumps(nums, 0);
};
