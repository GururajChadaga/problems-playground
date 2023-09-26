/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(2^n) exponential
    2 choices at every stage: pick house, don't pick house, for n houses
  Space O(n): auxiliary stack space for recursion with depth of n 
 */
const exploreHouses = (index, nums) => {
  if (index === nums.length - 1) return nums[index];
  if (index >= nums.length) return 0;

  return Math.max(
    nums[index] + exploreHouses(index + 2, nums), // pick current house
    0 + exploreHouses(index + 1, nums) // don't pick current house
  );
};
const rob = function (nums) {
  return exploreHouses(0, nums);
};
