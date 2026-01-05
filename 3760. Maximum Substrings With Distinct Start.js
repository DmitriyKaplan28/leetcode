/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function (s) {
  const n = s.length;
  const firstOccurrence = new Map();

  for (let i = 0; i < n; i++) {
    if (!firstOccurrence.has(s[i])) {
      firstOccurrence.set(s[i], i);
    }
  }

  return firstOccurrence.size;
};
