/**
 * @param {string} text
 * @param {string[]} dict
 * @return {boolean}
 */

/*
  Time: O(m * n)
    m is number of words in the dictionary
    n is the length of the text
 */
const wordBreak = function (text, dict) {
  const dp = new Array(text.length + 1).fill(false);
  dp[text.length] = true;
  for (let index = text.length - 1; index >= 0; index--) {
    for (let dictWord of dict) {
      if (text.substring(index, index + dictWord.length) === dictWord)
        dp[index] = dp[index + dictWord.length];
      if (dp[index]) break;
    }
  }
  return dp[0];
};
