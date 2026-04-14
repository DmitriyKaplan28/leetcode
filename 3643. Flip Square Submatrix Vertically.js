/**
 * @param {number[][]} grid
 * @param {number} x
 * @param {number} y
 * @param {number} k
 * @return {number[][]}
 */
var reverseSubmatrix = function (grid, x, y, k) {
    let top = x;
    let bottom = x + k - 1;

    while (top < bottom) {
        for (let col = y; col < y + k; col++) {
            const temp = grid[top][col];
            grid[top][col] = grid[bottom][col];
            grid[bottom][col] = temp;
        }
        top++;
        bottom--;
    }

    return grid;
};