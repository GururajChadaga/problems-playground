/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(2^n) exponential
    2 choices at every stage: pick single digit or double digit
  Space O(n): auxiliary stack space for recursion with depth of n 
 */
const getDecodeWays = (encoded) => {
  let result;
  if (encoded[0] === '0') return 0;
  if (encoded === '') return 1;

  result = getDecodeWays(encoded.substring(1));
  if (
    encoded.length >= 2 &&
    (encoded[0] === '1' ||
      (encoded[0] === '2' &&
        ['0', '1', '2', '3', '4', '5', '6'].includes(encoded[1])))
  )
    result += getDecodeWays(encoded.substring(2));
  return result;
};

const numDecodings = function (s) {
  return getDecodeWays(s);
};
