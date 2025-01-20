/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const firstOccurrence = Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - "a".charCodeAt(0);

    if (firstOccurrence[charIndex] === -1) {
      firstOccurrence[charIndex] = i;
    } else {
      const actualDistance = i - firstOccurrence[charIndex] - 1;

      if (actualDistance !== distance[charIndex]) {
        return false;
      }
    }
  }

  return true;
};
