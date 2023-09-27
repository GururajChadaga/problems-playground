/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  Time: O(n) for loop
    n = length of nums
  Space O(1)
 */
const canJumpGreedy = function (nums) {
  let destination = nums.length - 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    if (i + nums[i] >= destination) destination = i;
  }
  return destination === 0;
};
