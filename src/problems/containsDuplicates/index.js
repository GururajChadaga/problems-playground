/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numSet = new Set();
  for (let value of nums) {
    if (numSet.has(value)) return true;
    numSet.add(value);
  }
  return false;
};

/*
  To solve this without using extra memory, sort the array in as
  order and compare conscutive array elemtents. O(nlogn) solution.
*/
