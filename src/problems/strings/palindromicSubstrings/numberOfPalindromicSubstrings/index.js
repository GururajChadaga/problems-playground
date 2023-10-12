/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(n^2)
    n for checking each character in the string
    for each of those characters, left and right traverse the entire string
  Space: O(1)
*/
const countSubstrings = function (s) {
  let numberOfPalindromes = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i;
    right = i;
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      numberOfPalindromes++;
      left--;
      right++;
    }
    (left = i), (right = i + 1);
    while (s[left] === s[right] && left >= 0 && right < s.length) {
      numberOfPalindromes++;
      left--;
      right++;
    }
  }
  return numberOfPalindromes;
};
