/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freq = new Map();

  for (const word of words) {
    freq.set(word, (freq.get(word) || 0) + 1);
  }

  const sorted = Array.from(freq.keys()).sort((a, b) => {
    const freqDiff = freq.get(b) - freq.get(a);
    if (freqDiff !== 0) return freqDiff;
    return a.localeCompare(b);
  });

  return sorted.slice(0, k);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4));
