/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        ans.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) left++;
        while (nums[right] === nums[right + 1] && left < right) right--;
      }
    }
  }
  return ans;
};
