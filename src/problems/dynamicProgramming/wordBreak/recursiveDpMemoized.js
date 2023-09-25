/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
/*
  Note: memoization is not efficient here overlapping cases are minimal
    and hence, the cache hit frequency is low.
 */
const breakWord = (startIndex, word, dict, dictWord, memo) => {
  if (memo[startIndex]) return memo[startIndex];
  let result;
  if (startIndex === word.length) return true;
  if (word.substring(startIndex, startIndex + dictWord.length) === dictWord) {
    result = dict
      .map((dWord) =>
        breakWord(startIndex + dictWord.length, word, dict, dWord, memo)
      )
      .some((isMatch) => isMatch);
  } else result = false;
  memo[startIndex] = result;
  return result;
};

const wordBreak = function (s, wordDict) {
  const memo = new Array(s.length).fill(false);
  return wordDict
    .map((dictWord) => breakWord(0, s, wordDict, dictWord, memo))
    .some((isMatch) => isMatch);
};
