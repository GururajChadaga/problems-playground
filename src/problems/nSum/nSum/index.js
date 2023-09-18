/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

const anySum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const quad = [],
    ans = [];

  const nSum = (n, start, target) => {
    if (n != 2) {
      for (let i = start; i < nums.length - n + 1; i++) {
        if (i != start && nums[i] === nums[i - 1]) continue;
        quad.push(nums[i]);
        nSum(n - 1, i + 1, target - nums[i]);
        quad.pop();
      }
      return;
    }

    let left = start,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        ans.push([...quad, nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) left++;
        while (nums[right] === nums[right + 1] && left < right) right--;
      }
    }
  };
  nSum(4, 0, target);
  return ans;
};
