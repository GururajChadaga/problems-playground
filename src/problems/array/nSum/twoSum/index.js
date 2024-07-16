/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
  Time: O(n)
    loop
  Space: O(n)
    currentElementsMap map
 */
const twoSum = function (nums, target) {
  const currentElementsMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const diff = target - num;
    if (Object.hasOwn(currentElementsMap, diff)) {
      return [currentElementsMap[diff], i];
    }
    currentElementsMap[num] = i;
  }
};
