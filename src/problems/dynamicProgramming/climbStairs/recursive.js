/**
 * @param {number} n
 * @return {number}
 */

/*
  Time: O(2^n)
  Space: O(1)
*/
const climb = (start, n) => {
  if (start === n) return 1;
  if (start > n) return 0;
  return climb(start + 1, n) + climb(start + 2, n);
};

const climbStairs = function (n) {
  return climb(0, n);
};
