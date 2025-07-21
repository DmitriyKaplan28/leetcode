/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const m = mat.length;
  const n = mat[0].length;

  const rowSum = new Array(m).fill(0);
  const colSum = new Array(n).fill(0);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        rowSum[i]++;
        colSum[j]++;
      }
    }
  }

  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1 && rowSum[i] === 1 && colSum[j] === 1) {
        count++;
      }
    }
  }

  return count;
};
