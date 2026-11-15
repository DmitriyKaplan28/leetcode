/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  const counts = [0, 0, 0];
  let left = 0;
  let total = 0;

  for (let right = 0; right < s.length; right++) {
    counts[s.charCodeAt(right) - 97]++;

    while (counts[0] > 0 && counts[1] > 0 && counts[2] > 0) {
      total += s.length - right;
      counts[s.charCodeAt(left) - 97]--;
      left++;
    }
  }

  return total;
};
