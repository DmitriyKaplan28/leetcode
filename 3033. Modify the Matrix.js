/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const m = matrix.length;
  const n = matrix[0].length;

  const colMax = Array(n).fill(-Infinity);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      colMax[j] = Math.max(colMax[j], matrix[i][j]);
    }
  }

  const answer = matrix.map(row => row.slice());

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (answer[i][j] === -1) {
        answer[i][j] = colMax[j];
      }
    }
  }

  return answer;
};
