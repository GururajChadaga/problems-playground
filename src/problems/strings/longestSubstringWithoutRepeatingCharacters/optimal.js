/*
  Time: O(n)
  Space: O(26) => O(1)
    visitedMap will contain max of 26 alphabets
 */
const lengthOfLongestSubstring = function (str) {
  let left = 0,
    right = 0,
    maxLength = 0;
  const visitedMap = new Map();

  while (right < str.length) {
    if (
      !visitedMap.has(str[right]) ||
      (visitedMap.has(str[right]) && left > visitedMap.get(str[right]))
    ) {
      visitedMap.set(str[right], right);
      maxLength = Math.max(maxLength, right - left + 1);
    } else {
      left = visitedMap.get(str[right]) + 1;
      visitedMap.set(str[right], right);
    }
    right++;
  }
  return maxLength;
};
