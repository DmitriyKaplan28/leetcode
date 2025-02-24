/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let m = mat.length, n = mat[0].length;
    if (m * n !== r * c) return mat; 
    
    let flat = mat.flat();
    let reshaped = [];
    
    for (let i = 0; i < r; i++) {
        reshaped.push(flat.slice(i * c, (i + 1) * c));
    }
    
    return reshaped;
};
