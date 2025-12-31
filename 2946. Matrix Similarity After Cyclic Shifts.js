/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const shift = i % 2 === 0 ? (j - (k % n) + n) % n : (j + (k % n)) % n;
      if (mat[i][j] !== mat[i][shift]) {
        return false;
      }
    }
  }

  return true;
};
