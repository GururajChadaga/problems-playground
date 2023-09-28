/*
  Time: O(n)
    The overlapping subproblems will return the answer in constant time O(1).
    Therefore the total number of new subproblems we solve is ‘n’. 
    Hence total time complexity is O(n).

  Space: O(n)
    We are using a recursion stack space(O(n)) and an array (again O(n)).
    Therefore total space complexity will be O(n) + O(n) ≈ O(n)
 */

function jump(index, height, memo) {
  if (index === 0) return 0;
  if (memo[index] !== -1) return memo[index];
  let jumpTwo = Infinity;
  let jumpOne =
    jump(index - 1, height, memo) + Math.abs(height[index] - height[index - 1]);
  if (index > 1)
    jumpTwo =
      jump(index - 2, height, memo) +
      Math.abs(height[index] - height[index - 2]);

  return (memo[index] = Math.min(jumpOne, jumpTwo));
}

function getMinimumEnergyToJump() {
  const height = [30, 10, 60, 10, 60, 50];
  const n = height.length;
  const dp = new Array(n).fill(-1);
  console.log(jump(n - 1, height, dp));
}
