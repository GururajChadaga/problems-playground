/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  Time: O(n^2)
    loop
  Space: O(1)
 */
const threeSum = function (nums, target = 0) {
  nums.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < nums.length; i++) {
    // skip computed numbers to avoid duplicates
    if (i != 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        triplets.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // skip computed numbers to avoid duplicates
        while (nums[left] === nums[left - 1] && left < right) left++;
        while (nums[right] === nums[right + 1] && left < right) right--;
      }
    }
  }
  return triplets;
};
