/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const breakWord = (remainingText, dict) => {
  if (remainingText === '') return true;

  return dict
    .map((dictWord) => {
      if (dictWord === remainingText.substring(0, dictWord.length)) {
        return breakWord(remainingText.substring(dictWord.length), dict);
      }
    })
    .some((isMatch) => isMatch);
};

const wordBreak = function (text, dict) {
  return breakWord(text, dict);
};
