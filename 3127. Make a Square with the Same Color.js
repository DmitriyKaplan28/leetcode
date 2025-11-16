/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let countB = 0;
      let countW = 0;

      for (let x = i; x < i + 2; x++) {
        for (let y = j; y < j + 2; y++) {
          if (grid[x][y] === 'B') countB++;
          else countW++;
        }
      }

      if (countB >= 3 || countW >= 3) return true;
    }
  }
  return false;
};
