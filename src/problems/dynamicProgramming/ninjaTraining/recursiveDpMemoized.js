/*
Time: O(N*4*3)
  There are N*4 states and for every state,
  we are running a for loop iterating three times.

Space: O(N) + O(N*4)
  We are using a recursion stack space(O(N)) and a 2D array (again O(N*4)).
  Therefore total space complexity will be O(N) + O(N) ≈ O(N)
*/
function ninjaTraining(n, points) {
  // Create a 2D array 'dp' with dimensions (n x 4) and initialize it with -1
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(4).fill(-1);
  }

  // Define the recursive function 'f' with parameters 'day', 'last', 'points', and 'dp'
  function f(day, last) {
    // If the result is already calculated, return it from 'dp'
    if (dp[day][last] !== -1) return dp[day][last];

    // Base case: When 'day' is 0, calculate the maximum points for the last day
    if (day === 0) {
      let maxi = 0;
      for (let i = 0; i <= 2; i++) {
        if (i !== last) {
          maxi = Math.max(maxi, points[0][i]);
        }
      }
      return (dp[day][last] = maxi);
    }

    // Initialize 'maxi' to store the maximum points
    let maxi = 0;

    // Iterate through the activities for the current day
    for (let i = 0; i <= 2; i++) {
      if (i !== last) {
        // Calculate the points for the current activity and recursively call 'f' for the previous day
        let activity = points[day][i] + f(day - 1, i);
        maxi = Math.max(maxi, activity);
      }
    }

    // Store the result in 'dp' and return it
    return (dp[day][last] = maxi);
  }

  // Call the recursive function 'f' to find the maximum points starting from day 'n-1' and 'last' activity 3
  return f(n - 1, 3);
}

// Define the 'points' array with the ninja training data
let points = [
  [10, 40, 70],
  [20, 50, 80],
  [30, 60, 90],
];

// Get the number of days
let n = points.length;

// Call the 'ninjaTraining' function and print the result
console.log(ninjaTraining(n, points));
