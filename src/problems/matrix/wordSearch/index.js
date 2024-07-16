/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
  Time:  O(m * n * 4^L)
  Space: O(mn)
    currentPath set
 */
const exist = function (board, word) {
  const rows = board.length,
    cols = board[0].length,
    currentPath = new Set();

  const dfs = (row, col, wordIndex) => {
    const coords = `${row},${col}`;
    if (wordIndex === word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[wordIndex] ||
      currentPath.has(coords)
    )
      return false;

    currentPath.add(coords);
    const res =
      dfs(row, col - 1, wordIndex + 1) ||
      dfs(row, col + 1, wordIndex + 1) ||
      dfs(row - 1, col, wordIndex + 1) ||
      dfs(row + 1, col, wordIndex + 1);
    currentPath.delete(coords);

    return res;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }
  return false;
};

/*
  Time:  O(m * n * 4^L)
  Space: O(1)
 */
const existSpaceOptimized = function (board, word) {
  const rows = board.length,
    cols = board[0].length;

  const dfs = (row, col, wordIndex) => {
    if (wordIndex === word.length) return true;
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      board[row][col] !== word[wordIndex] ||
      board[row][col] === '#'
    )
      return false;
    const tmp = board[row][col];
    board[row][col] = '#';
    const res =
      dfs(row, col - 1, wordIndex + 1) ||
      dfs(row, col + 1, wordIndex + 1) ||
      dfs(row - 1, col, wordIndex + 1) ||
      dfs(row + 1, col, wordIndex + 1);

    board[row][col] = tmp;
    return res;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (dfs(row, col, 0)) return true;
    }
  }
  return false;
};
