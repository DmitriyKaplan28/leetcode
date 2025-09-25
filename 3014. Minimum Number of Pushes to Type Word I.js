/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const freq = {};
  for (const char of word) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const sortedLetters = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);

  let totalPushes = 0;

  for (let i = 0; i < sortedLetters.length; i++) {
    const letter = sortedLetters[i];
    const letterFreq = freq[letter];

    const position = Math.floor(i / 8) + 1;

    totalPushes += letterFreq * position;
  }

  return totalPushes;
};

console.log(minimumPushes("abcde"));
console.log(minimumPushes("xycdefghij"));
