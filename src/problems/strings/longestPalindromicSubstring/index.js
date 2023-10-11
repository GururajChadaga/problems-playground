/**
 * @param {string} s
 * @return {string}
 */

/*
  Time: O(n^2)
    n = s.length = t.length
  Space: O(1)
*/
const longestPalindrome = function (s) {
  let maxLenPalindrome = 0,
    longestPalindrome;
  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      if (right - left + 1 >= maxLenPalindrome) {
        maxLenPalindrome = right - left + 1;
        longestPalindrome = s.slice(left, right + 1);
      }
      left--;
      right++;
    }

    left = i;
    right = i + 1;
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      if (right - left + 1 >= maxLenPalindrome) {
        maxLenPalindrome = right - left + 1;
        longestPalindrome = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }
  return longestPalindrome;
};
