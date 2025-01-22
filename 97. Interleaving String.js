/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  const m = s1.length,
    n = s2.length;

  if (m + n !== s3.length) return false;

  const dp = Array(m + 1)
    .fill(false)
    .map(() => Array(n + 1).fill(false));

  dp[0][0] = true;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const k = i + j - 1;
      if (i > 0 && s1[i - 1] === s3[k]) {
        dp[i][j] = dp[i][j] || dp[i - 1][j];
      }
      if (j > 0 && s2[j - 1] === s3[k]) {
        dp[i][j] = dp[i][j] || dp[i][j - 1];
      }
    }
  }

  return dp[m][n];
};

console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac"));
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"));
console.log(isInterleave("", "", ""));

