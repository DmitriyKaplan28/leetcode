/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const newLength = matrix.length;
  const newHeight = matrix[0].length;
  const transposedMatrix = Array.from({ length: newHeight }, () =>
    Array(newLength)
  );
  for (let i = 0; i < newLength; i++) {
    for (let j = 0; j < newHeight; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }
  return transposedMatrix;
};
