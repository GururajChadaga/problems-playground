// Time: O(n)
// Space: O(n)
const nthFibDpMemoized = (n, memo) => {
  if (memo[n]) return memo[n];
  let result;
  if (n === 1 || n === 2) result = 1;
  else result = nthFibDpMemoized(n - 1, memo) + nthFibDpMemoized(n - 2, memo);
  memo[n] = result;
  return result;
};

console.log(nthFibDpMemoized(n, Array(n + 1)));
