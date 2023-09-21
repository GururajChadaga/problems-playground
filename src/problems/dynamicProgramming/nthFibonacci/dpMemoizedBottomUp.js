// Time: O(n)
// Space: O(n)
const nthFibDpBottomUp = (n) => {
  const memo = Array(n + 1);
  memo[1] = 1;
  memo[2] = 1;
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
};

console.log(nthFibDpBottomUp(n));
