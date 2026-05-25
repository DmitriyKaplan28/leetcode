/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function (matrix) {
    const n = matrix.length;
    const ans = new Array(n);
    for (let i = 0; i < n; i++) {
        let degree = 0;
        for (let j = 0; j < n; j++) {
            degree += matrix[i][j];
        }
        ans[i] = degree;
    }
    return ans;
};