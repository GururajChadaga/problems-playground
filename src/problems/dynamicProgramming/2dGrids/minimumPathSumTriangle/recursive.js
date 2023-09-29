/**
 * @param {number[][]} triangle
 * @return {number}
 */

/*
Time: O(2^((m-1)*(m))) exponential
  2 choices at each step: down, down next index
  this happens for every element in the triangle.
  number of elements in the triangle 
    = 1 + 2 + 3 + ... m-1 
    = (m - 1) * (m - 1 + 1)
    = (m - 1) * (m)

Space: O(n)
  auxiliary stack space for recustion call for number of rows
*/
const getMinimumTotal = (triangle, row, col) => {
  if (row === triangle.length - 1) return triangle[row][col];
  if (row >= triangle.length) return Infinity;
  return (
    triangle[row][col] +
    Math.min(
      getMinimumTotal(triangle, row + 1, col),
      getMinimumTotal(triangle, row + 1, col + 1)
    )
  );
};
const minimumTotal = function (triangle) {
  return getMinimumTotal(triangle, 0, 0);
};
