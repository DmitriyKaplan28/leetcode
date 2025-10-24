/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array(strs.length + 1)
    .fill()
    .map(() =>
      Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0))
    );

  for (let i = 1; i <= strs.length; i++) {
    const str = strs[i - 1];
    let zeros = 0,
      ones = 0;
    for (let char of str) {
      if (char === "0") zeros++;
      else ones++;
    }

    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        dp[i][j][k] = dp[i - 1][j][k];

        if (j >= zeros && k >= ones) {
          dp[i][j][k] = Math.max(
            dp[i][j][k],
            dp[i - 1][j - zeros][k - ones] + 1
          );
        }
      }
    }
  }

  return dp[strs.length][m][n];
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3));
console.log(findMaxForm(["10","0","1"], 1, 1));
