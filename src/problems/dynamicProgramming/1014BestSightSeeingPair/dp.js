/**
 * @param {number[]} values
 * @return {number}
 */

/*
  Time: O(n)
  Space: O(1)
*/
const maxScoreSightseeingPair = function (values) {
  // maximise ((values[i] + i) + (values[j] - j))
  // as j > i, for every j, look only for the left of itself for i
  // hence, calculate prefixMax of (values[i] + i) for every j

  let prefixMax = values[0] + 0,
    maxScore = -Infinity;
  for (let j = 1; j < values.length; j++) {
    const score = prefixMax + values[j] - j;
    maxScore = Math.max(maxScore, score);
    prefixMax = Math.max(prefixMax, values[j] + j);
  }
  return maxScore;
};
