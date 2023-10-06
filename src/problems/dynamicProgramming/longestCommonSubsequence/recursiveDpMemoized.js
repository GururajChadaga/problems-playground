/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/*
  Time: O(n x m)
    where n is lenght of text1, m is length of text2
  Space: O(n x m) + O( n + m)
    O(n x m) for logic
    O(m + n) for auxiliary stack space for recursion call.
      recursion depth is m + n
*/
const getLCS = (text1, text2, text1Index, text2Index, memo) => {
  if (text1Index >= text1.length || text2Index >= text2.length) return 0;
  if (text1[text1Index] === text2[text2Index])
    return 1 + getLCS(text1, text2, text1Index + 1, text2Index + 1, memo);

  if (memo[text1Index][text2Index] !== -1) return memo[text1Index][text2Index];
  return (memo[text1Index][text2Index] =
    0 +
    Math.max(
      getLCS(text1, text2, text1Index + 1, text2Index, memo),
      getLCS(text1, text2, text1Index, text2Index + 1, memo)
    ));
};

const longestCommonSubsequence = function (text1, text2) {
  const memo = new Array(text1.length)
    .fill(-1)
    .map(() => new Array(text2.length).fill(-1));
  return getLCS(text1, text2, 0, 0, memo);
};
