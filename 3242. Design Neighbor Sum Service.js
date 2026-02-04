/**
 * @param {number[][]} grid
 */
var NeighborSum = function (grid) {
    this.grid = grid;
    this.n = grid.length;
    this.pos = new Map();
    for (let r = 0; r < this.n; r++) {
        for (let c = 0; c < this.n; c++) {
            this.pos.set(grid[r][c], [r, c]);
        }
    }
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.adjacentSum = function (value) {
    const [r, c] = this.pos.get(value);
    let sum = 0;
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < this.n && nc >= 0 && nc < this.n) {
            sum += this.grid[nr][nc];
        }
    }
    return sum;
};

/** 
 * @param {number} value
 * @return {number}
 */
NeighborSum.prototype.diagonalSum = function (value) {
    const [r, c] = this.pos.get(value);
    let sum = 0;
    const dirs = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
    for (const [dr, dc] of dirs) {
        const nr = r + dr, nc = c + dc;
        if (nr >= 0 && nr < this.n && nc >= 0 && nc < this.n) {
            sum += this.grid[nr][nc];
        }
    }
    return sum;
};

/** 
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */