/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

/*
  Time: O(mn)
  Space: O(1)
 */
const spiralOrder = function (matrix) {
  let left = 0,
    top = 0,
    right = matrix[0].length - 1,
    bottom = matrix.length - 1;

  const spiral = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      spiral.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      spiral.push(matrix[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      left++;
    }
  }
  return spiral;
};
