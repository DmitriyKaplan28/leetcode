/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  for (const row of grid) {
    row.sort((a, b) => a - b);
  }

  let answer = 0;
  for (let col = 0; col < grid[0].length; col++) {
    let columnMax = 0;
    for (let r = 0; r < grid.length; r++) {
      if (grid[r][col] > columnMax) columnMax = grid[r][col];
    }
    answer += columnMax;
  }

  return answer;
};
