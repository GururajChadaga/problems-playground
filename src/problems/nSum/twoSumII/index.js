/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumII = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left <= right) {
    const sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [++left, ++right];
    }
  }
  return [];
};
