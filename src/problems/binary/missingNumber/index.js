/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Non binary solution
  Time: O(n) for the reduce function. Everything else is O(1)
*/
const missingNumber = function (nums) {
  const n = nums.length;
  const firstNSum = (n * (n + 1)) / 2;
  const arraySum = nums.reduce((num, acc) => num + acc, 0);
  return firstNSum - arraySum;
};

/*
  Binary solution
  Time: O(2n) for the two passes.
  n ^ n = 0
  n ^ 0 = n
  so ^ing all the numbers from range of [0,n] and the nums array
    will give the missing number
*/
const missingNumberBinary = function (nums) {
  const n = nums.length;
  let currXor = 0;
  nums.forEach((num) => {
    currXor ^= num;
  });
  for (let i = 0; i <= n; i++) {
    currXor ^= i;
  }
  return currXor;
};
