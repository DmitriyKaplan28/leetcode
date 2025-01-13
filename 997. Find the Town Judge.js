/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const trustCounts = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trustCounts[a]--;
    trustCounts[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trustCounts[i] === n - 1) {
      return i;
    }
  }

  return -1;
};
