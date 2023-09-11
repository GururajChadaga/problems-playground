/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const currentElementsMap = new Map();
  for (const [index, num] of Object.entries(nums)) {
    const diff = target - num;
    if (currentElementsMap.has(diff)) {
      return [currentElementsMap.get(diff), index];
    }
    currentElementsMap.set(num, index);
  }
};
