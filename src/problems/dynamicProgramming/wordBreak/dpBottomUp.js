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
  for (let i = text.length - 1; i >= 0; i--) {
    dict.forEach((dictWord) => {
      if (text.substring(i, i + dictWord.length) === dictWord) {
        // prevent override an existing true with a possible future false
        if (dp[i]) return;
        dp[i] = dp[i + dictWord.length];
        console.log(text, dictWord, i, dp);
      }
    });
  }
  return dp[0];
};
