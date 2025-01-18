/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const freq = {};
  for (const char of word) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const freqArray = Object.values(freq);

  for (let i = 0; i < freqArray.length; i++) {
    const temp = [...freqArray];
    temp[i]--;

    const filtered = temp.filter((f) => f > 0);

    if (new Set(filtered).size === 1) {
      return true;
    }
  }

  return false;
};
