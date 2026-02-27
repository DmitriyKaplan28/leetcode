/**
 * @param {number[][]} grid
 * @return {number}
 */
var findChampion = function (grid) {
    const n = grid.length;
    let cand = 0;

    for (let i = 1; i < n; i++) {
        if (grid[i][cand] === 1) {
            cand = i;
        }
    }

    for (let j = 0; j < n; j++) {
        if (j === cand) continue;
        if (grid[cand][j] !== 1) {
            return -1;
        }
    }

    return cand;
};