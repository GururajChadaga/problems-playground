/**
 * @param {number} n
 * @return {number[]}
 */

/*
  Time: O(nlogn)
    logn: right shifting a number takes logn.
    n * logn: this needs to be done for n elements
  Space: O(1)
*/
const getHammingWeight = function (n) {
  let hammingWeight = 0;
  while (n) {
    hammingWeight += n % 2;
    n = n >>> 1;
  }
  return hammingWeight;
};

const countBitsBetter = function (n) {
  const hammingWeights = [];
  for (let i = 0; i <= n; i++) {
    hammingWeights.push(getHammingWeight(i));
  }
  return hammingWeights;
};
