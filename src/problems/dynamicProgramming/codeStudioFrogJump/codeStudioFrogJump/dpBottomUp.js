/*
  Time: O(n)
    for the loop
  Space: O(n)
    external array of size ‘n+1’
*/
function bottomUp() {
  const height = [30, 10, 60, 10, 60, 50];
  const n = height.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 0;

  for (let ind = 1; ind < n; ind++) {
    let jumpTwo = Infinity;
    let jumpOne = dp[ind - 1] + Math.abs(height[ind] - height[ind - 1]);
    if (ind > 1)
      jumpTwo = dp[ind - 2] + Math.abs(height[ind] - height[ind - 2]);

    dp[ind] = Math.min(jumpOne, jumpTwo);
  }

  console.log(dp[n - 1]);
}

/*
  Time: O(n)
    for the loop
  Space: O(1)
    We are not using any extra space.
*/
function bottomUpSpaceOptimized() {
  const height = [30, 10, 60, 10, 60, 50];
  const n = height.length;
  let prev = 0;
  let prev2 = 0;

  for (let i = 1; i < n; i++) {
    let jumpTwo = Infinity;
    let jumpOne = prev + Math.abs(height[i] - height[i - 1]);
    if (i > 1) jumpTwo = prev2 + Math.abs(height[i] - height[i - 2]);

    let cur_i = Math.min(jumpOne, jumpTwo);
    prev2 = prev;
    prev = cur_i;
  }

  console.log(prev);
}
