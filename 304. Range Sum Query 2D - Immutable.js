/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  // Prefix sum matrix with an extra row and column
  this.prefix = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let r = 1; r <= m; r++) {
    for (let c = 1; c <= n; c++) {
      this.prefix[r][c] =
        matrix[r - 1][c - 1] +
        this.prefix[r - 1][c] +
        this.prefix[r][c - 1] -
        this.prefix[r - 1][c - 1];
    }
  }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.prefix[row2 + 1][col2 + 1] -
    this.prefix[row1][col2 + 1] -
    this.prefix[row2 + 1][col1] +
    this.prefix[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
