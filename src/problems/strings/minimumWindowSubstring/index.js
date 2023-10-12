/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  if (t === '') return '';
  const tFreqMap = {},
    windowFreqMap = {};
  let left = 0,
    right = 0,
    minWindow = [-1, -1],
    minWindowLength = Infinity,
    currentMatches = 0,
    requiredMatches;
  for (let char of t) {
    tFreqMap[char] = (tFreqMap[char] ?? 0) + 1;
  }
  requiredMatches = Object.keys(tFreqMap).length;
  for (let right = 0; right < s.length; right++) {
    const rightChar = s[right];
    windowFreqMap[rightChar] = (windowFreqMap[rightChar] ?? 0) + 1;
    if (
      Object.keys(tFreqMap).includes(rightChar) &&
      windowFreqMap[rightChar] === tFreqMap[rightChar]
    )
      currentMatches++;

    while (currentMatches === requiredMatches) {
      if (right - left + 1 < minWindowLength) {
        minWindowLength = right - left + 1;
        minWindow = [left, right];
      }
      const leftChar = s[left];
      windowFreqMap[leftChar] -= 1;
      if (
        Object.keys(tFreqMap).includes(leftChar) &&
        windowFreqMap[leftChar] < tFreqMap[leftChar]
      )
        currentMatches--;
      left++;
    }
  }
  [left, right] = minWindow;
  return minWindowLength === Infinity ? '' : s.slice(left, right + 1);
};
