/**
 * @param {number} n
 * @return {number}
 */

/*
  Time: O(n)
    number of states = n
  Space: O(n)
    for the memo array
*/
const climb = (n, start, memo) => {
  if (start === n) return 1;
  else if (start > n) return 0;

  if (memo[start] !== -1) return memo[start];
  return (memo[start] = climb(n, start + 1, memo) + climb(n, start + 2, memo));
};

const climbStairs = function (n) {
  const memo = new Array(n + 1).fill(-1);
  return climb(n, 0, memo);
};
