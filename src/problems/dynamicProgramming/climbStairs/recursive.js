/**
 * @param {number} n
 * @return {number}
 */

/*
  Time: O(2^n) exponential
    2 decisions at every step: +1 or +2
  Space: O(1)
*/
const climb = (n, start) => {
  if (start === n) return 1;
  else if (start > n) return 0;
  return climb(n, start + 1) + climb(n, start + 2);
};

const climbStairs = function (n) {
  return climb(n, 0);
};
