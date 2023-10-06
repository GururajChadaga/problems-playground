/**
 * @param {number[]} nums
 * @return {number}
 */

const findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  minNum = Infinity;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    // mid is part of left sorted array
    if (nums[left] <= nums[mid]) {
      minNum = Math.min(minNum, nums[left]);
      left = mid + 1;
    }
    // mid is part of righ sorted array
    else if (nums[mid] <= nums[right]) {
      minNum = Math.min(minNum, nums[mid]);
      right = mid - 1;
    }
  }
  return minNum;
};
