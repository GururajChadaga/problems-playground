/**
 * @param {number} n
 * @return {number}
 */
/*
  Time: O(n)
  Space: O(1)
*/
const climbStairs = function (n) {
  let first = 1,
    second = 1;
  for (let i = 3; i <= n + 1; i++) {
    const tmp = second;
    second = first + second;
    first = tmp;
  }
  return second;
};
