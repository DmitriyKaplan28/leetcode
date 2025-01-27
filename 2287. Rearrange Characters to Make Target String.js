/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function (s, target) {
  const sCount = {};
  const targetCount = {};

  for (const char of s) {
    sCount[char] = (sCount[char] || 0) + 1;
  }

  for (const char of target) {
    targetCount[char] = (targetCount[char] || 0) + 1;
  }

  let maxCopies = Infinity;

  for (const char in targetCount) {
    if (!(char in sCount)) {
      return 0;
    }
    maxCopies = Math.min(
      maxCopies,
      Math.floor(sCount[char] / targetCount[char])
    );
  }

  return maxCopies;
};
