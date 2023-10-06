/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/*
  Time: O(n x m)
    where n is lenght of text1, m is length of text2
  Space: O(n x m) 
*/
const longestCommonSubsequence = function (text1, text2) {
  const dp = new Array(text1.length + 1)
    .fill(0)
    .map(() => new Array(text2.length + 1).fill(0));
  for (let text1Index = text1.length - 1; text1Index >= 0; text1Index--) {
    for (let text2Index = text2.length - 1; text2Index >= 0; text2Index--) {
      if (text1[text1Index] === text2[text2Index])
        dp[text1Index][text2Index] = 1 + dp[text1Index + 1][text2Index + 1];
      else
        dp[text1Index][text2Index] =
          0 +
          Math.max(
            dp[text1Index + 1][text2Index],
            dp[text1Index][text2Index + 1]
          );
    }
  }
  return dp[0][0];
};

/*
  Time: O(n x m)
    where n is lenght of text1, m is length of text2
  Space: O(m)
    for prevDown arr
*/
const longestCommonSubsequenceSpaceOptimized = function (text1, text2) {
  let prevDown = Array(text2.length + 1).fill(0);
  for (let text1Index = text1.length - 1; text1Index >= 0; text1Index--) {
    const curr = Array(text2.length + 1).fill(0);
    for (let text2Index = text2.length - 1; text2Index >= 0; text2Index--) {
      if (text1[text1Index] === text2[text2Index])
        curr[text2Index] = 1 + prevDown[text2Index + 1];
      else
        curr[text2Index] = Math.max(prevDown[text2Index], curr[text2Index + 1]);
    }
    prevDown = curr;
  }
  return prevDown[0];
};
