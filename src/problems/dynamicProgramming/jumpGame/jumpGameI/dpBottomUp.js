const canJump = function (nums) {
  const dp = new Array(nums.length).fill(0);
  dp[nums.length - 1] = true;

  for (let i = nums.length - 2; i >= 0; i--) {
    for (let jumpBy = 1; jumpBy <= nums[i]; jumpBy++) {
      dp[i] = dp[i + jumpBy];
      if (dp[i]) break;
    }
  }
  return dp[0];
};
