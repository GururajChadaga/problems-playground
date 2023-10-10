/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
  Time: O(nm)
  Space: O(nm)
*/
const rotate = function (matrix) {
  const rotated = new Array(matrix.length)
    .fill(-1)
    .map(() => new Array(matrix[0].length).fill(-1));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      rotated[j][matrix.length - 1 - i] = matrix[i][j];
    }
  }
};
