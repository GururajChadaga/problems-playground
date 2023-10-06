/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  Time: O(n*n)
  Space: O(n*n) -> dp matrix
 */

const lengthOfLISMemoized = function (nums) {
  const dp = new Array(nums.length + 1)
    .fill(0)
    .map(() => new Array(nums.length + 1).fill(0));

  for (let currIndex = nums.length - 1; currIndex >= 0; currIndex--) {
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      /* len = dp(i + 1, j), here, j is j+1 as it starts from -1,
       and we shift the index, to store in the matrix
       second index of dp array is shift by 1 everywhere */
      let len = 0 + dp[currIndex + 1][prevIndex + 1]; // don't take current element
      if (nums[currIndex] > nums[prevIndex] || prevIndex === -1) {
        len = Math.max(
          len,
          1 + // take current element
            dp[currIndex + 1][currIndex + 1]
        );
      }
      dp[currIndex][prevIndex + 1] = len;
    }
  }
  return dp[0][0];
};

/* to convert memo to space optimised,
  at all [index] -> curr
  at all [index + 1] -> next
*/

/*
  Time: O(n*n)
  Space: O(n * 2) -> currDpArr and nextDpArr
 */
const lengthOfLIS = function (nums) {
  let prevDown = Array(nums.length + 1).fill(0);
  for (let currIndex = nums.length - 1; currIndex >= 0; currIndex--) {
    const curr = Array(nums.length + 1).fill(0);
    for (let prevIndex = currIndex - 1; prevIndex >= -1; prevIndex--) {
      let len = prevDown[prevIndex + 1];
      if (nums[currIndex] > nums[prevIndex] || prevIndex === -1)
        len = Math.max(len, 1 + prevDown[currIndex + 1]);
      curr[prevIndex + 1] = len;
    }
    prevDown = curr;
  }
  return prevDown[0];
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
