/*
Time: O(N*4*3)
  There are three nested loops

Space: O(N*4)
  We are using an external array of size ‘N*4’’.
*/
function ninjaTraining(n, points) {
  // Create a 2D array 'dp' with dimensions (n x 4) and initialize it with 0
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(4).fill(0);
  }

  // Initialize the base cases for the first day
  dp[0][0] = Math.max(points[0][1], points[0][2]);
  dp[0][1] = Math.max(points[0][0], points[0][2]);
  dp[0][2] = Math.max(points[0][0], points[0][1]);
  dp[0][3] = Math.max(points[0][0], Math.max(points[0][1], points[0][2]));

  // Loop through each day and calculate the maximum points
  for (let day = 1; day < n; day++) {
    for (let last = 0; last < 4; last++) {
      dp[day][last] = 0;
      for (let task = 0; task <= 2; task++) {
        if (task !== last) {
          // Calculate the points for the current activity and update 'dp'
          let activity = points[day][task] + dp[day - 1][task];
          dp[day][last] = Math.max(dp[day][last], activity);
        }
      }
    }
  }

  // The maximum points are stored in dp[n-1][3]
  return dp[n - 1][3];
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

/*
Time Complexity: O(N*4*3)
  There are three nested loops

Space Complexity: O(4)
  We are using an external array of size ‘4’ to store only one row.
*/
function ninjaTrainingSpaceOptimized(n, points) {
  // Initialize the 'prev' array with 4 elements, all set to 0
  let prev = new Array(4).fill(0);

  // Initialize the base cases for the first day
  prev[0] = Math.max(points[0][1], points[0][2]);
  prev[1] = Math.max(points[0][0], points[0][2]);
  prev[2] = Math.max(points[0][0], points[0][1]);
  prev[3] = Math.max(points[0][0], Math.max(points[0][1], points[0][2]));

  // Loop through each day and calculate the maximum points
  for (let day = 1; day < n; day++) {
    // Initialize a temporary 'temp' array with 4 elements, all set to 0
    let temp = new Array(4).fill(0);
    for (let last = 0; last < 4; last++) {
      // Initialize the current 'temp' value to 0
      temp[last] = 0;
      for (let task = 0; task <= 2; task++) {
        if (task !== last) {
          // Calculate the points for the current activity and update 'temp'
          temp[last] = Math.max(temp[last], points[day][task] + prev[task]);
        }
      }
    }

    // Update 'prev' with the values from 'temp' for the next iteration
    prev = temp;
  }

  // The maximum points are stored in 'prev[3]'
  return prev[3];
}
