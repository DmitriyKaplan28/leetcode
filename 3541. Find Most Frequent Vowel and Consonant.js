/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const vowels = "aeiou";
  const vowelsMap = {};
  const consonantsMap = {};
  let maxVowel = 0;
  let maxConsonant = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      vowelsMap[s[i]] = (vowelsMap[s[i]] || 0) + 1;
      maxVowel = Math.max(maxVowel, vowelsMap[s[i]]);
    } else {
      consonantsMap[s[i]] = (consonantsMap[s[i]] || 0) + 1;
      maxConsonant = Math.max(maxConsonant, consonantsMap[s[i]]);
    }
  }
  return maxVowel + maxConsonant;
};
console.log(maxFreqSum("aeiaeia"));
console.log(maxFreqSum("successes"));