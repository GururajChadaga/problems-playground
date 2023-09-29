/**
 * @param {number[][]} triangle
 * @return {number}
 */

/*
Time: O((m-1)*(m)) exponential
  number of states
    = number of elements in the triangle 
    = 1 + 2 + 3 + ... m-1 
    = (m - 1) * (m - 1 + 1)
    = (m - 1) * (m)

Space: O(n) + O((m-1)*(m))
  auxiliary stack space for recustion call for number of rows
  O((m-1)*(m)) for the memo array
    number of states
    = number of elements in the triangle 
    = 1 + 2 + 3 + ... m-1 
    = (m - 1) * (m - 1 + 1)
    = (m - 1) * (m)
*/
const getMinimumTotal = (triangle, row, col, memo) => {
  if (row === triangle.length - 1) return triangle[row][col];
  if (row >= triangle.length) return Infinity;

  if (memo[row][col] !== -1) return memo[row][col];
  return (memo[row][col] =
    triangle[row][col] +
    Math.min(
      getMinimumTotal(triangle, row + 1, col, memo),
      getMinimumTotal(triangle, row + 1, col + 1, memo)
    ));
};
const minimumTotal = function (triangle) {
  const memo = triangle.map((row) => row.map(() => -1));
  return getMinimumTotal(triangle, 0, 0, memo);
};
