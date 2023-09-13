/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    mid;
  while (right >= left) {
    mid = parseInt((left + right) / 2);

    if (nums[mid] === target) return true;

    // edge case
    if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
      left += 1;
      right -= 1;
      continue;
    }

    // mid is part of left sorted array
    if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    // mid is part of righ sorted array
    if (nums[mid] <= nums[right]) {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return false;
};
