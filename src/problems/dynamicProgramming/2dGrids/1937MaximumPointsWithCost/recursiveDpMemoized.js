/**
 * @param {number[][]} points
 * @return {number}
 */

const checkPaths = (points, m, n, row, col, memo) => {
  if (row === m - 1) return points[row][col];

  if (memo[row][col] !== -1) return memo[row][col];
  return (memo[row][col] =
    points[row][col] +
    Math.max(
      ...points[row + 1].map(
        (_, index) =>
          checkPaths(points, m, n, row + 1, index, memo) - Math.abs(col - index)
      )
    ));
};

const maxPoints = function (points) {
  const m = points.length,
    n = points[0].length;
  const memo = new Array(m).fill(-1).map(() => new Array(n).fill(-1));
  return Math.max(
    ...points[0].map((_, index) => checkPaths(points, m, n, 0, index, memo))
  );
};
