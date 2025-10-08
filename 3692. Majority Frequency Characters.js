/**
 * @param {string} s
 * @return {string}
 */
var majorityFrequencyGroup = function (s) {
  const freq = {};
  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  const freqGroups = {};
  for (let char in freq) {
    const count = freq[char];
    if (!freqGroups[count]) {
      freqGroups[count] = [];
    }
    freqGroups[count].push(char);
  }

  let maxSize = 0;
  let majorityFreq = 0;

  for (let frequency in freqGroups) {
    const groupSize = freqGroups[frequency].length;
    const freqValue = parseInt(frequency);

    if (
      groupSize > maxSize ||
      (groupSize === maxSize && freqValue > majorityFreq)
    ) {
      maxSize = groupSize;
      majorityFreq = freqValue;
    }
  }

  return freqGroups[majorityFreq].join("");
};

console.log(majorityFrequencyGroup("aaabbbccdddde"));
console.log(majorityFrequencyGroup("abcd"));
console.log(majorityFrequencyGroup("pfpfgi"));
