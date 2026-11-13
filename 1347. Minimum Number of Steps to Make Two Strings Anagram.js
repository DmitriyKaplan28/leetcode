/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  const counts = new Map();

  for (const char of s) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  let steps = 0;
  for (const char of t) {
    const count = counts.get(char) || 0;
    if (count === 0) {
      steps++;
    } else {
      counts.set(char, count - 1);
    }
  }

  return steps;
};
