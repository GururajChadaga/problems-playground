/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let left = 0,
    right = nums.length - 1,
    minElement = Infinity;

  while (right >= left) {
    const mid = parseInt((left + right) / 2);

    // mid is part of left sorted array
    if (nums[mid] >= nums[left]) {
      minElement = Math.min(nums[left], minElement);
      left = mid + 1;
    }

    // mid is part of righ sorted array
    if (nums[mid] <= nums[right]) {
      minElement = Math.min(nums[mid], minElement);
      right = mid - 1;
    }
  }
  return minElement;
};
