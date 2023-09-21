/**
 * @param {number} n
 * @return {number}
 */

/*
  Time: O(n)
  Space: O(n)
*/
const climb = (start, n, memo) => {
  if (memo[start]) return memo[start];
  let result;
  if (start === n) result = 1;
  else if (start > n) result = 0;
  else result = climb(start + 1, n, memo) + climb(start + 2, n, memo);
  memo[start] = result;
  return result;
};

const climbStairs = function (n) {
  return climb(0, n, Array(n+1));
};
