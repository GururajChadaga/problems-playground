/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n) for loop
    n = length of nums
  Space O(1)
 */
const jumpGreedy = function (nums) {
  let left = 0,
    right = 0,
    farthest = 0,
    jumpCount = 0;
  while (right < nums.length - 1) {
    for (let i = left; i <= right; i++) {
      farthest = Math.max(farthest, i + nums[i]);
    }
    left = right + 1;
    right = farthest;
    jumpCount++;
  }
  return jumpCount;
};
