/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  let n = grid.length;
  let area = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        area += 2;

        area += grid[i][j] * 4;

        if (i > 0) area -= 2 * Math.min(grid[i][j], grid[i - 1][j]);
        if (j > 0) area -= 2 * Math.min(grid[i][j], grid[i][j - 1]);
      }
    }
  }

  return area;
};

console.log(surfaceArea([[1,2],[3,4]]));
console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]));
console.log(surfaceArea([[2,2,2],[2,1,2],[2,2,2]]));
