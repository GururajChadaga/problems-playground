/**
 * @param {number} n - a positive integer
 * @return {number}
 */

const hammingWeight = function (n) {
  let hammingWeight = 0;
  while (n) {
    hammingWeight += n % 2;
    n = n >>> 1;
  }
  return hammingWeight;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeightStringManipulation = function (n) {
  return n.toString(2).split('0').join('').length;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeightOptimal = function (n) {
  let hammingWeight = 0;
  while (n) {
    hammingWeight++;
    n &= n - 1;
  }
  return hammingWeight;
};
