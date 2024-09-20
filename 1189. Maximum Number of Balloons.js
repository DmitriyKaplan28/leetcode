/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const count = {};
  for (let c of text) {
    count[c] = count[c] || 0;
    count[c]++;
  }
  return Math.min(count.b, count.a, count.l / 2, count.o / 2, count.n) | 0;
};
