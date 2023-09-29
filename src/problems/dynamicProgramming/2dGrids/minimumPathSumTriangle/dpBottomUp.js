/**
 * @param {number[][]} triangle
 * @return {number}
 */

/*
Time: ~ O(n * n) 
  nested loop

Space: O((m-1)*(m))
  2D dp array
  O((m-1)*(m)) for the memo array
    number of states
    = number of elements in the triangle 
    = 1 + 2 + 3 + ... m-1 
    = (m - 1) * (m - 1 + 1)
    = (m - 1) * (m)
*/
const minimumTotal = function (triangle) {
  const dp = triangle.map((row) => row.map(() => 0));
  for (let row = triangle.length - 1; row >= 0; row--) {
    for (let col = triangle[row].length - 1; col >= 0; col--) {
      if (row === triangle.length - 1) dp[row][col] = triangle[row][col];
      else {
        dp[row][col] =
          triangle[row][col] + Math.min(dp[row + 1][col], dp[row + 1][col + 1]);
      }
    }
  }
  return dp[0][0];
};

/*
Time: ~O(n * n) 
  nested loop

Space: O(n)
  for prevDown Array.
    where n is the maximum lenght of all rows, ie, the last row.
   we reduced SC from O(n * n) to O(n)
*/
const minimumTotalSpaceOptimized = function (triangle) {
  // length of prevDown array should be 1 more than the curr array
  let prevDown = new Array(triangle[triangle.length - 1].length).fill(0);
  for (let row = triangle.length - 1; row >= 0; row--) {
    const curr = new Array(triangle[row].length - 1).fill(0);
    for (let col = triangle[row].length - 1; col >= 0; col--) {
      if (row === triangle.length - 1) curr[col] = triangle[row][col];
      else {
        curr[col] =
          triangle[row][col] + Math.min(prevDown[col], prevDown[col + 1]);
      }
    }
    prevDown = curr;
  }
  return prevDown[0];
};
