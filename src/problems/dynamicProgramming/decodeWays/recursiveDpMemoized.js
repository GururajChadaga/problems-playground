/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(n) 
  Space O(n)
 */

const decode = (encoded, index, memo) => {
  if (index === encoded.length) return 1;
  else if (index > encoded.length) return 0;

  if (memo[index] !== -1) return memo[index];

  if (encoded[index] === '0') return 0;
  else {
    const takeOneDigit = decode(encoded, index + 1, memo),
      nextTwoDigits = +encoded.substring(index, index + 2),
      takeTwoDigits =
        nextTwoDigits <= 26 ? decode(encoded, index + 2, memo) : 0;

    return (memo[index] = takeOneDigit + takeTwoDigits);
  }
};

const numDecodings = function (encoded) {
  const memo = new Array(encoded.length).fill(-1);
  return decode(encoded, 0, memo);
};
