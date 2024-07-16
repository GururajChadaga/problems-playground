/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

/*
  Time: O(n^m-1)
    where m is the mSum
    loop
  Space: O(1) + recursive stack space
 */
const anySum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const currNums = [],
    ans = [];

  const mSum = (n, start, targetSum) => {
    if (n != 2) {
      for (let i = start; i < nums.length; i++) {
        if (i != start && nums[i] === nums[i - 1]) continue;
        currNums.push(nums[i]);
        mSum(n - 1, i + 1, targetSum - nums[i]);
        currNums.pop();
      }
      return;
    }

    let left = start,
      right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      } else {
        ans.push([...currNums, nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1] && left < right) left++;
        while (nums[right] === nums[right + 1] && left < right) right--;
      }
    }
  };
  mSum(4, 0, target);
  return ans;
};
