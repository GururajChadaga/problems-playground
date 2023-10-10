/**
 * @param {string} s
 * @return {number}
 */

/*
  Time: O(n)
    two-pass:
      1st pass for right pointer from 0 to n
      2nd pass for left pointer from 0 to n
  
  Space: O(26) => O(1)
    visitedSet will contain max of 26 alphabets
 */
const lengthOfLongestSubstring = function (str) {
  let left = 0,
    right = 0,
    maxLength = 0;
  const visitedSet = new Set();

  while (right < str.length) {
    if (!visitedSet.has(str[right])) {
      visitedSet.add(str[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      visitedSet.delete(str[left]);
      left++;
    }
  }
  return maxLength;
};
