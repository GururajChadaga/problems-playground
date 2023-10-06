/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(n) for the loop
  Space O(n) for the dp array
 */
const numDecodings = function (encoded) {
  const dp = new Array(encoded.length + 2).fill(0);
  dp[encoded.length + 1] = 0;
  dp[encoded.length] = 1;
  for (let index = encoded.length - 1; index >= 0; index--) {
    if (encoded[index] === '0') dp[index] = 0;
    else {
      const takeOneDigit = dp[index + 1],
        nextTwoDigits = +encoded.substring(index, index + 2),
        takeTwoDigits = nextTwoDigits <= 26 ? dp[index + 2] : 0;

      dp[index] = takeOneDigit + takeTwoDigits;
    }
  }
  return dp[0];
};

/*
  Time: O(n) for the loop
  Space O(1)
 */
const numDecodingsSpaceOptimized = function (encoded) {
  let next = 1,
    next2 = 0;
  for (let index = encoded.length - 1; index >= 0; index--) {
    let curr;
    if (encoded[index] === '0') curr = 0;
    else {
      const takeOneDigit = next,
        nextTwoDigits = +encoded.substring(index, index + 2),
        takeTwoDigits = nextTwoDigits <= 26 ? next2 : 0;

      curr = takeOneDigit + takeTwoDigits;
    }
    next2 = next;
    next = curr;
  }
  return next;
};
