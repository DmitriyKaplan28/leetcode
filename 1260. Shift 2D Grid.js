/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const total = m * n;

  const flat = grid.flat();
  k = k % total;

  const shifted = flat.slice(-k).concat(flat.slice(0, total - k));

  const result = [];
  for (let i = 0; i < m; i++) {
    result.push(shifted.slice(i * n, (i + 1) * n));
  }

  return result;
};
