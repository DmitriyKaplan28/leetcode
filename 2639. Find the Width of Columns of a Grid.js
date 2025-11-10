/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findColumnWidth = function(grid) {
   const m = grid.length;
  const n = grid[0].length;
  const ans = new Array(n).fill(0);

  for (let j = 0; j < n; j++) {
    let maxLen = 0;
    for (let i = 0; i < m; i++) {
      const len = grid[i][j].toString().length;
      maxLen = Math.max(maxLen, len);
    }
    ans[j] = maxLen;
  }

  return ans; 
};
