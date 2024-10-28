/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let max = 0;
  let zeros = 0;
  let ones = 0;

  for (const char of s) {
    if (char === "1") {
      ones++;
    }
  }

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "0") {
      zeros++;
    } else {
      ones--;
    }
    const currentScore = zeros + ones;
    max = Math.max(max, currentScore);
  }

  return max;
};
