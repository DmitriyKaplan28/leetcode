/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix || matrix.length === 0) return 0;

  const m = matrix.length;
  const n = matrix[0].length;
  const dp = Array(m)
    .fill()
    .map(() => Array(n).fill(0));

  let maxSide = 0;

  for (let j = 0; j < n; j++) {
    dp[0][j] = parseInt(matrix[0][j]);
    maxSide = Math.max(maxSide, dp[0][j]);
  }

  for (let i = 0; i < m; i++) {
    dp[i][0] = parseInt(matrix[i][0]);
    maxSide = Math.max(maxSide, dp[i][0]);
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        maxSide = Math.max(maxSide, dp[i][j]);
      }
    }
  }

  return maxSide * maxSide;
};
