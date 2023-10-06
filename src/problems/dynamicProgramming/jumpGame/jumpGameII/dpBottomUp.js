const jump = function (nums) {
  const dp = new Array(nums.length).fill(Infinity);
  dp[nums.length - 1] = 0;
  for (let i = nums.length - 2; i >= 0; i--) {
    let jumpCount = Infinity;
    for (let jumpBy = 1; jumpBy <= nums[i]; jumpBy++) {
      jumpCount = Math.min(
        jumpCount,
        i + jumpBy >= nums.length ? Infinity : dp[i + jumpBy]
      );
    }
    dp[i] = jumpCount + 1;
  }
  return dp[0];
};
