/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(n) 
  Space O(n)
 */
const getDecodeWays = (encoded, memo) => {
  if (memo.get(encoded)) return memo.get(encoded);
  let result;
  if (encoded[0] === '0') return 0;
  if (encoded === '') return 1;

  result = getDecodeWays(encoded.substring(1), memo);
  if (
    encoded.length >= 2 &&
    (encoded[0] === '1' ||
      (encoded[0] === '2' &&
        ['0', '1', '2', '3', '4', '5', '6'].includes(encoded[1])))
  )
    result += getDecodeWays(encoded.substring(2), memo);
  memo.set(encoded, result);
  return result;
};

const numDecodings = function (s) {
  const memo = new Map();
  return getDecodeWays(s, memo);
};
