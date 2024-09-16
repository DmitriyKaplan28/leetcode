/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        res = res + 4;
        if (i > 0 && grid[i - 1][j] === 1) {
          res = res - 2;
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          res = res - 2;
        }
      }
    }
  }
  return res;
};

console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));
console.log(islandPerimeter([[1,0]]));

