/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(n) for the loop
  Space O(n) for the dp array
 */
const numDecodings = function (encoded) {
  const dp = new Array(encoded.length + 1);
  dp[encoded.length] = 1;
  for (let i = encoded.length - 1; i >= 0; i--) {
    if (encoded[i] === '0') dp[i] = 0;
    else {
      dp[i] = dp[i + 1];
      if (
        i <= encoded.length - 2 &&
        (encoded[i] === '1' ||
          (encoded[i] === '2' &&
            ['0', '1', '2', '3', '4', '5', '6'].includes(encoded[i + 1])))
      )
        dp[i] += dp[i + 2];
    }
  }
  return dp[0];
};

/*
  Time: O(n) for the loop
  Space O(1)
 */
const numDecodingsSpaceOptimized = function (encoded) {
  let next2 = 1,
    next,
    curr;
  next = encoded[encoded.length - 1] === '0' ? 0 : 1;
  curr = encoded[encoded.length - 1] === '0' ? 0 : 1;
  for (let i = encoded.length - 2; i >= 0; i--) {
    if (encoded[i] === '0') curr = 0;
    else {
      curr = next;
      if (
        i <= encoded.length - 2 &&
        (encoded[i] === '1' ||
          (encoded[i] === '2' &&
            ['0', '1', '2', '3', '4', '5', '6'].includes(encoded[i + 1])))
      )
        curr += next2;
    }
    const tmpNext = next;
    next = curr;
    next2 = tmpNext;
  }
  return curr;
};
