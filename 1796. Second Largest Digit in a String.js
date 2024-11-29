/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  const digits = new Set();

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      digits.add(Number(char));
    }
  }

  const sorted = Array.from(digits).sort((a, b) => b - a);

  return sorted.length > 1 ? sorted[1] : -1;
};
