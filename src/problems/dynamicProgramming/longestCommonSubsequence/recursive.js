/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/*
  Time: O(2^n x 2^m)
    where n is lenght of text1, m is length of text2
  Space: O(m + n)
    O(1) for logic
    O(m + n) for auxiliary stack space for recursion call.
      recursion depth is m + n
*/
const getLCS = (text1, text2, text1Index, text2Index) => {
  if (text1Index === text1.length || text2Index === text2.length) return 0;
  if (text1[text1Index] === text2[text2Index])
    return 1 + getLCS(text1, text2, text1Index + 1, text2Index + 1);
  return (
    0 +
    Math.max(
      getLCS(text1, text2, text1Index + 1, text2Index),
      getLCS(text1, text2, text1Index, text2Index + 1)
    )
  );
};

const longestCommonSubsequence = function (text1, text2) {
  return getLCS(text1, text2, 0, 0);
};
