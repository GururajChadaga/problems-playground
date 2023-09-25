/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const breakWord = (startIndex, word, dict, dictWord) => {
  if (startIndex === word.length) return true;
  if (word.substring(startIndex, startIndex + dictWord.length) === dictWord) {
    return dict
      .map((dWord) =>
        breakWord(startIndex + dictWord.length, word, dict, dWord)
      )
      .some((isMatch) => isMatch);
  }
  return false;
};

const wordBreak = function (s, wordDict) {
  return wordDict
    .map((dictWord) => breakWord(0, s, wordDict, dictWord))
    .some((isMatch) => isMatch);
};
