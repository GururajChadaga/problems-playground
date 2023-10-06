/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

/*
  Note: memoization is not efficient here overlapping cases are minimal
    and hence, the cache hit frequency is low.
 */
const breakWord = (remainingText, dict, memo) => {
  if (remainingText === '') return true;
  if (memo.get(remainingText)) return memo.get(remainingText);
  const res = dict
    .map((dictWord) => {
      if (dictWord === remainingText.substring(0, dictWord.length)) {
        return breakWord(remainingText.substring(dictWord.length), dict, memo);
      }
    })
    .some((isMatch) => isMatch);
  memo.set(remainingText, res);
  return res;
};

const wordBreak = function (text, dict) {
  const memo = new Map();
  return breakWord(text, dict, memo);
};
