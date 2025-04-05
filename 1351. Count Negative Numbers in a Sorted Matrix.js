/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let row = m - 1;
    let col = 0;
    let count = 0;

    while (row >= 0 && col < n) {
        if (grid[row][col] < 0) {
            count += (n - col);
            row--;
        } else {
            col++; 
        }
    }

    return count;
};
