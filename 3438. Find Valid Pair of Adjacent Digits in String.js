/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function (s) {
  const count = Array(10).fill(0);
  for (const ch of s) {
    count[Number(ch)]++;
  }
  for (let i = 0; i < s.length - 1; i++) {
    const a = s[i],
      b = s[i + 1];
    if (a !== b) {
      if (count[Number(a)] === Number(a) && count[Number(b)] === Number(b)) {
        return a + b;
      }
    }
  }
  return "";
};
