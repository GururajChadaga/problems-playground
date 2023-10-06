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
  const currentElementsMap = new Map();
  for (const [index, num] of Object.entries(nums)) {
    const diff = target - num;
    if (currentElementsMap.has(diff))
      return [currentElementsMap.get(diff), index];
    currentElementsMap.set(num, index);
  }
};
