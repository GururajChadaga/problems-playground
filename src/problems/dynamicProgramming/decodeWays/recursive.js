/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(2^n) exponential
    2 choices at every stage: pick single digit or double digit
  Space O(n): auxiliary stack space for recursion with depth of n 
 */
const decode = (encoded, index) => {
  if (index === encoded.length) return 1;
  else if (index > encoded.length) return 0;

  if (encoded[index] === '0') return 0;
  else {
    const takeOneDigit = decode(encoded, index + 1),
      nextTwoDigits = +encoded.substring(index, index + 2),
      takeTwoDigits = nextTwoDigits <= 26 ? decode(encoded, index + 2) : 0;
    return takeOneDigit + takeTwoDigits;
  }
};

const numDecodings = function (encoded) {
  return decode(encoded, 0);
};
