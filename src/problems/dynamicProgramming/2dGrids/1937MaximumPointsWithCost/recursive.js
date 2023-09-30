/**
 * @param {number[][]} points
 * @return {number}
 */

const checkPaths = (points, m, n, row, col) => {
  if (row === m - 1) return points[row][col];
  return (
    points[row][col] +
    Math.max(
      ...points[row + 1].map(
        (_, index) =>
          checkPaths(points, m, n, row + 1, index) - Math.abs(col - index)
      )
    )
  );
};

const maxPoints = function (points) {
  const m = points.length,
    n = points[0].length;
  return Math.max(
    ...points[0].map((_, index) => checkPaths(points, m, n, 0, index))
  );
};
