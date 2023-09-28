/*
  Time: O(N *K)
    The overlapping subproblems will return the answer in constant time.
    Therefore the total number of new subproblems we solve is ‘n’.
    At every new subproblem, we are running another loop for K times.
    Hence total time complexity is O(N * K).

  Space: O(N)
    We are using a recursion stack space(O(N)) and an array (again O(N)).
    Therefore total space complexity will be O(N) + O(N) ≈ O(N)
*/
function solveUtil(ind, height, dp, k) {
  // Base case: If we are at the beginning (index 0), no cost is needed.
  if (ind === 0) return 0;
  // If the result for this index has been previously calculated, return it.
  if (dp[ind] !== -1) return dp[ind];

  let mmSteps = Infinity;

  // Loop to try all possible jumps from '1' to 'k'
  for (let j = 1; j <= k; j++) {
    // Ensure that we do not jump beyond the beginning of the array
    if (ind - j >= 0) {
      // Calculate the cost for this jump and update mmSteps with the minimum cost
      const jump =
        solveUtil(ind - j, height, dp, k) +
        Math.abs(height[ind] - height[ind - j]);
      mmSteps = Math.min(jump, mmSteps);
    }
  }
  // Store the minimum cost for this index in the dp array and return it.
  dp[ind] = mmSteps;
  return dp[ind];
}

function jump(n, height, k) {
  const dp = Array(n).fill(-1); // Initialize a memoization array to store calculated results
  return solveUtil(n - 1, height, dp, k); // Start the recursion from the last index
}

const height = [30, 10, 60, 10, 60, 50];
const n = height.length;
const k = 2;
const dp = Array(n).fill(-1); // Initialize a memoization array for the main function
console.log(jump(n, height, k)); // Print the result of the solve function
