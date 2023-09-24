/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n*n)
  Space: O(n*n) * O(n)
    O(n*n) -> memo matrix
    O(n) -> recursion calls stack
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const getLIS = (nums, currIndex, prevIndex, memo) => {
  if (currIndex === nums.length) return 0;
  if (memo[currIndex][prevIndex + 1] !== -1)
    return memo[currIndex][prevIndex + 1];
  let len = 0 + getLIS(nums, currIndex + 1, prevIndex, memo); // don't take current element
  if (nums[currIndex] > nums[prevIndex] || prevIndex === -1) {
    len = Math.max(
      len,
      1 + // take current element
        getLIS(nums, currIndex + 1, currIndex, memo)
    );
  }
  memo[currIndex][prevIndex + 1] = len;
  return len;
};

const lengthOfLIS = function (nums) {
  const memo = new Array(nums.length)
    .fill(-1)
    .map(() => new Array(nums.length + 1).fill(-1));
  return getLIS(nums, 0, -1, memo);
};
