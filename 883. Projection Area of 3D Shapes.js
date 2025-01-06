/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
    let xyProjection = 0;

    let yzProjection = 0;

    let zxProjection = 0;

    for (let i = 0; i < grid.length; i++) {

        let maxRow = 0; 

        let maxCol = 0;

        for (let j = 0; j < grid[i].length; j++) {

            if (grid[i][j] > 0) {

                xyProjection++;

            }

            maxRow = Math.max(maxRow, grid[i][j]);

            maxCol = Math.max(maxCol, grid[j][i]); 

        }

        yzProjection += maxRow;

        zxProjection += maxCol;

    }
    return xyProjection + yzProjection + zxProjection
};
