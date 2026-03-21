/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    const m = grid.length;
  const n = grid[0].length;
  const result = [];

  let count = 0;

  for (let i = 0; i < m; i++) {
    if (i % 2 === 0) {
      
      for (let j = 0; j < n; j++) {
        if (count % 2 === 0) {
          result.push(grid[i][j]);
        }
        count++;
      }
    } else {
      
      for (let j = n - 1; j >= 0; j--) {
        if (count % 2 === 0) {
          result.push(grid[i][j]);
        }
        count++;
      }
    }
  }

  return result
};
