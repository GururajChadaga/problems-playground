/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

/*
  Time: O(26n) => O(n)
    for every iteration, we find the max frequency from the frequency map
  Space: O(26) => O(1)
 */
const characterReplacement = function (str, k) {
  let left = 0,
    right = 0,
    maxWindow = 0;
  const freqMap = new Map();

  while (right < str.length) {
    const rightChar = str[right],
      leftChar = str[left];
    freqMap.set(rightChar, (freqMap.get(rightChar) ?? 0) + 1);
    const windowLength = right - left + 1;
    const maxFreq = Math.max(...freqMap.values());
    if (windowLength - maxFreq <= k)
      maxWindow = Math.max(maxWindow, windowLength);
    else {
      freqMap.set(leftChar, freqMap.get(leftChar) - 1);
      left++;
    }
    right++;
  }
  return maxWindow;
};

/*
  Time: O(n)
    we are not computing maxFreq every iteration. Instead, we are storing it
      and recomputing it everytime the freqMap is updated
  Space: O(26) => O(1)
 */
const characterReplacementTimeOptimized = function (str, k) {
  let left = 0,
    right = 0,
    maxWindow = 0,
    maxFreq = 0;
  const freqMap = new Map();

  while (right < str.length) {
    const rightChar = str[right],
      leftChar = str[left];
    freqMap.set(rightChar, (freqMap.get(rightChar) ?? 0) + 1);
    maxFreq = Math.max(maxFreq, freqMap.get(rightChar));
    const windowLength = right - left + 1;
    if (windowLength - maxFreq <= k)
      maxWindow = Math.max(maxWindow, windowLength);
    else {
      // no need to update maxFreq as freqMap's frequency is getting reduced here.
      freqMap.set(leftChar, freqMap.get(leftChar) - 1);
      left++;
    }
    right++;
  }
  return maxWindow;
};
