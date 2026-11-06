/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
  const letters = new Map();
  const frequencies = new Map();
  let distinctLetters = 0;
  let maxOccurrences = 0;

  for (let right = 0; right < s.length; right++) {
    const rightLetter = s[right];
    const rightCount = (letters.get(rightLetter) || 0) + 1;
    letters.set(rightLetter, rightCount);
    if (rightCount === 1) distinctLetters++;

    if (right >= minSize) {
      const leftLetter = s[right - minSize];
      const leftCount = letters.get(leftLetter) - 1;
      if (leftCount === 0) {
        letters.delete(leftLetter);
        distinctLetters--;
      } else {
        letters.set(leftLetter, leftCount);
      }
    }

    if (right >= minSize - 1 && distinctLetters <= maxLetters) {
      const substring = s.slice(right - minSize + 1, right + 1);
      const frequency = (frequencies.get(substring) || 0) + 1;
      frequencies.set(substring, frequency);
      maxOccurrences = Math.max(maxOccurrences, frequency);
    }
  }

  return maxOccurrences;
};
