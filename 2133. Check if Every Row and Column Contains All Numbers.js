/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    let rowSet = new Set();
    let colSet = new Set();

    for (let j = 0; j < n; j++) {
      rowSet.add(matrix[i][j]);
      colSet.add(matrix[j][i]);
    }

    if (rowSet.size !== n || colSet.size !== n) {
      return false;
    }

    for (let num = 1; num <= n; num++) {
      if (!rowSet.has(num) || !colSet.has(num)) {
        return false;
      }
    }
  }

  return true;
    
};
