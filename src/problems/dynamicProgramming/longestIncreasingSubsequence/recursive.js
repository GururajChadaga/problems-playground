/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(2^n)
  Space: O(1)
 */
const getLIS = (nums, currIndex, prevIndex) => {
  if (currIndex === nums.length) return 0;
  let len = 0 + getLIS(nums, currIndex + 1, prevIndex); // don't take current element
  if (nums[currIndex] > nums[prevIndex] || prevIndex === -1) {
    len = Math.max(
      len,
      1 + // take current element
        getLIS(nums, currIndex + 1, currIndex)
    );
  }
  return len;
};

const lengthOfLIS = function (nums) {
  return getLIS(nums, 0, -1);
};
