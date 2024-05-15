/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  let n = grid.length,
    localMaximum = Array(n - 2)
      .fill(0)
      .map(() => Array(n - 2));
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      localMaximum[i][j] = calculateLocalMaximum(i, j);
    }
  }
  return localMaximum;
  function calculateLocalMaximum(row, col) {
    let max = -Infinity;
    for (let i = row; i <= row + 2; i++) {
      for (let j = col; j <= col + 2; j++) {
        max = Math.max(max, grid[i][j]);
      }
    }
    return max;
  }
};
