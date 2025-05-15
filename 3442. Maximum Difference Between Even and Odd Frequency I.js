/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function (s) {
  const freq = new Map();
  for (let char of s) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  const evenFreqs = [];
  const oddFreqs = [];

  for (let [char, count] of freq) {
    if (count % 2 === 0) {
      evenFreqs.push(count);
    } else {
      oddFreqs.push(count);
    }
  }

  if (evenFreqs.length === 0 || oddFreqs.length === 0) {
    return 0;
  }

  const maxOdd = Math.max(...oddFreqs);
  const minEven = Math.min(...evenFreqs);

  return maxOdd - minEven;
};
