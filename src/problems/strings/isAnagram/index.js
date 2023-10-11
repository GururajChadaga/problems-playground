/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
  Time: O(n)
    n = s.length = t.length
  Space: O(n)
 */
export const isAnagram = function (s, t) {
  let sFreqMap = {},
    tFreqMap = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    sFreqMap[s[i]] = sFreqMap[s[i]] ? sFreqMap[s[i]] + 1 : 1;
    tFreqMap[t[i]] = tFreqMap[t[i]] ? tFreqMap[t[i]] + 1 : 1;
  }
  for (let key in sFreqMap) {
    if (sFreqMap[key] !== tFreqMap[key]) return false;
  }
  return true;
};

/*
  Time: O(nlogn)
    n = s.length = t.length
    split and join takes n each
    logn to sort
  Space: O(1) or O(n) based on which sort is implemented
 */
export const isAnagramalt = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('');
};
