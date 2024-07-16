/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/*
  Time: O(n * nlogn)
    n for loop
    nlogn for sorting n strings
  Space: O(k)
    k is the number of anagrams for which k-v pairs are stored in the map/object
 */
const groupAnagrams = function (strs) {
  const groupedAnagrams = {};
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    if (!groupedAnagrams[sortedStr]) groupedAnagrams[sortedStr] = [];
    groupedAnagrams[sortedStr].push(str);
  }
  return Object.values(groupedAnagrams);
};

const groupAnagramsUsingMap = function (strs) {
  const groupedAnagrams = new Map();
  for (let str of strs) {
    const sortedStr = str.split('').sort().join('');
    const groupedArr = groupedAnagrams.get(sortedStr);
    const updatedGroupedArr = groupedArr ? [...groupedArr, str] : [str];
    groupedAnagrams.set(sortedStr, updatedGroupedArr);
  }
  return [...groupedAnagrams.values()];
};
