/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n*n)
  Space: O(n*n) -> memo matrix
 */

const lengthOfLISMemoized = function (nums) {
  const memo = new Array(nums.length + 1)
    .fill(0)
    .map(() => new Array(nums.length + 1).fill(0));

  for (let currIndex = nums.length - 1; currIndex >= 0; currIndex--) {
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      let len = 0 + memo[currIndex + 1][prevIndex + 1]; // don't take current element
      if (nums[currIndex] > nums[prevIndex] || prevIndex === -1) {
        len = Math.max(
          len,
          1 + // take current element
            memo[currIndex + 1][currIndex + 1]
        );
      }
      memo[currIndex][prevIndex + 1] = len;
    }
  }
  return memo[0][0];
};

/* to convert memo to space optimised,
  at all [index] -> curr
  at all [index + 1] -> next
*/

/*
  Time: O(n*n)
  Space: O(n * 2) -> currDpArr and nextDpArr
 */
const lengthOfLISSpaceOptimized = function (nums) {
  let currDpArr = new Array(nums.length + 1).fill(0),
    nextDpArr = new Array(nums.length + 1).fill(0);

  for (let currIndex = nums.length - 1; currIndex >= 0; currIndex--) {
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      let len = 0 + nextDpArr[prevIndex + 1]; // don't take current element
      if (nums[currIndex] > nums[prevIndex] || prevIndex === -1) {
        len = Math.max(
          len,
          1 + // take current element
            nextDpArr[currIndex + 1]
        );
      }
      currDpArr[prevIndex + 1] = len;
    }
    nextDpArr = currDpArr;
  }
  return nextDpArr[0];
};

/*
  Time: O(n*n)
  Space: O(n)
 */
const lengthOfLISSpaceMaxOptimized = function (nums) {
  let dp = new Array(nums.length).fill(1);

  for (let currIndex = 0; currIndex < nums.length; currIndex++) {
    for (let prevIndex = 0; prevIndex < currIndex; prevIndex++) {
      let len = dp[currIndex];
      if (nums[prevIndex] < nums[currIndex]) {
        len = 1 + dp[prevIndex];
      }
      dp[currIndex] = Math.max(dp[currIndex], len);
    }
  }
  return Math.max(...dp);
};

/*
  Time: O(n*n)
  Space: O(2n)
 */
const printLIS = function (nums) {
  let dp = new Array(nums.length).fill(1),
    prevIndices = new Array(nums.length),
    maxDp = 1,
    maxDPIndex = 0,
    lis = [];
  for (let currIndex = 0; currIndex < nums.length; currIndex++) {
    prevIndices[currIndex] = currIndex;
    for (let prevIndex = 0; prevIndex < currIndex; prevIndex++) {
      if (
        nums[prevIndex] < nums[currIndex] &&
        1 + dp[prevIndex] > dp[currIndex]
      ) {
        dp[currIndex] = 1 + dp[prevIndex];
        prevIndices[currIndex] = prevIndex;
      }
    }
    if (dp[currIndex] > maxDp) {
      maxDp = dp[currIndex];
      maxDPIndex = currIndex;
    }
  }
  while (maxDPIndex != prevIndices[maxDPIndex]) {
    lis.unshift(nums[maxDPIndex]);
    maxDPIndex = prevIndices[maxDPIndex];
  }
  lis.unshift(nums[maxDPIndex]);
  console.log(lis);
  return maxDp;
};
