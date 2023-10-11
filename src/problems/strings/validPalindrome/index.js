/**
 * @param {string} s
 * @return {boolean}
 */

const isAlphaNumeric = (char) => {
  return (
    (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
    (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
  );
};

/*
  Time: O(n)
    loop, split, reverse, join
  Time: O(n)
    for strippedStr
 */
const isPalindrome = function (s) {
  let strippedStr = '';
  for (let char of s) {
    if (isAlphaNumeric(char)) strippedStr += char.toLowerCase();
  }
  return strippedStr === strippedStr.split('').reverse().join('');
};
/*
  Time: O(n)
    loop
  Time: O(1)
    we use two-pointers to avoid extra space
 */
const isPalindromeSpaceOptimized = function (s) {
  let left = 0,
    right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }
  return true;
};
