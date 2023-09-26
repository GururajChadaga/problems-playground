/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  Time: O(n) for loop
    two-pass
  Space O(1)
    two-pass
 */
const getMaximumNonAdjacentSum = function (nums) {
  let next = nums[nums.length - 1],
    next2 = 0,
    curr = nums[nums.length - 2];
  for (let i = nums.length - 2; i >= 0; i--) {
    const pickHouse = nums[i] + next2;
    let discardHouse = 0 + next;
    curr = Math.max(pickHouse, discardHouse);
    const tmpCurr = curr;
    const tmpNext = next;
    next = tmpCurr;
    next2 = tmpNext;
  }
  return nums.length === 1 ? nums[0] : curr;
};

const rob = function (nums) {
  if (nums.length <= 3) return Math.max(...nums);
  return Math.max(
    getMaximumNonAdjacentSum(nums.slice(1)),
    getMaximumNonAdjacentSum(nums.slice(0, -1))
  );
};
