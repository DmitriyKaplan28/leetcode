/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  const n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - 1 - i];
  }

  if (n % 2 === 1) {
    const center = Math.floor(n / 2);
    sum -= mat[center][center];
  }

  return sum;
};
