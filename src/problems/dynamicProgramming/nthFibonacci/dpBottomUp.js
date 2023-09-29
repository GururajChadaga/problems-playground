// Time: O(n)
// Space: O(n)
const nthFibDpBottomUp = (n) => {
  const dp = Array(n + 1);
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

console.log(nthFibDpBottomUp(n));

/*
  Time: O(n)
  Space: O(1)
*/
const nthFibDpBottomUpSpaceOptimized = (n) => {
  let first = 1;
  let second = 1;
  for (let i = 3; i <= n; i++) {
    const tmp = second;
    second = first + second;
    first = tmp;
  }
  return second;
};

console.log(nthFibDpBottomUpSpaceOptimized(10));
