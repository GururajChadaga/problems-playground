/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
  Time: O(n)
    loop
  Space: O(n)
    set
 */
const containsDuplicate = function (nums) {
  const numsSet = new Set();
  for (let num of nums) {
    if (numsSet.has(num)) {
      return true;
    }
    numsSet.add(num);
  }
  return false;
};

/*
  To solve this without using extra memory, sort the array in as
  order and compare conscutive array elemtents. O(nlogn) solution.
*/

/*
  Time:  O(nlogn)
    sorting the array
  Space: O(1)
 */
const containsDuplicate2 = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i !== 0 && nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
};

/*
  Using Reduce
  Time:  O(nlogn)
    sorting the array
  Space: O(1)
 */
const containsDuplicate3 = function (nums) {
  nums.sort((a, b) => a - b);
  return nums.reduce((acc, curr, index) => {
    if (index === 0) {
      return false;
    }
    return acc || curr === nums[index - 1];
  }, false);
};
