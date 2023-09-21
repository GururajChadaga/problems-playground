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
