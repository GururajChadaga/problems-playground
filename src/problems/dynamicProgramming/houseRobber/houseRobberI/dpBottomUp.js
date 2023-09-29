/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n) for loop
  Space O(n) for dp
 */
const rob = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    let pickHouse = nums[i];
    if (i <= nums.length - 3) pickHouse += dp[i + 2];
    let discardHouse = 0;
    if (i <= nums.length - 2) discardHouse += dp[i + 1];
    dp[i] = Math.max(pickHouse, discardHouse);
  }
  return dp[0];
};

/*
  Time: O(n) for loop
  Space O(1)
 */
const robSpaceOptimized = function (nums) {
  let next = nums[nums.length - 1],
    next2 = 0,
    curr = nums[nums.length - 2];
  for (let i = nums.length - 2; i >= 0; i--) {
    const pickHouse = nums[i] + next2;
    let discardHouse = 0 + next;
    curr = Math.max(pickHouse, discardHouse);
    const tmpCurr = curr;
    const tmpNext = next;
    next = tmpCurr;
    next2 = tmpNext;
  }
  return nums.length === 1 ? nums[0] : curr;
};
