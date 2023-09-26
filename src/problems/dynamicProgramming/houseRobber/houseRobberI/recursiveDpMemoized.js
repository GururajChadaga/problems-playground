/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  Time: O(n) 
  Space O(n) + O(n): 
    O(n) for auxiliary stack space for recursion with depth of n 
    O(n) for memo
 */
const exploreHouses = (index, nums, memo) => {
  if (index === nums.length - 1) return nums[index];
  if (index >= nums.length) return 0;

  if (memo[index] !== -1) return memo[index];
  let res = Math.max(
    nums[index] + exploreHouses(index + 2, nums, memo), // pick current house
    0 + exploreHouses(index + 1, nums, memo) // don't pick current house
  );
  memo[index] = res;
  return res;
};
const rob = function (nums) {
  const memo = new Array(nums.length).fill(-1);
  return exploreHouses(0, nums, memo);
};
