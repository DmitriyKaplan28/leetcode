/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const result = [];

    for (let d = 0; d < m + n - 1; d++) {
        const diagonal = [];
        let row = d < n ? 0 : d - n + 1;
        let col = d < n ? d : n - 1;

        while (row < m && col >= 0) {
            diagonal.push(mat[row][col]);
            row++;
            col--;
        }

        if (d % 2 === 0) {
            diagonal.reverse();
        }

        result.push(...diagonal);
    }

    return result;
};
