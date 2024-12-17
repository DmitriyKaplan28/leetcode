/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const charIndices = {};
  let maxLength = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char in charIndices) {
      const currentLength = i - charIndices[char] - 1;
      maxLength = Math.max(maxLength, currentLength);
    } else {
      charIndices[char] = i;
    }
  }

  return maxLength;
};
