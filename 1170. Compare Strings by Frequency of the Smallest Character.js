/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const getFrequency = (s) => {
    let minChar = s[0];
    let count = 0;

    for (const ch of s) {
      if (ch < minChar) {
        minChar = ch;
        count = 1;
      } else if (ch === minChar) {
        count++;
      }
    }

    return count;
  };

  const wordFreqs = words.map(getFrequency).sort((a, b) => a - b);
  const answer = [];

  for (const query of queries) {
    const target = getFrequency(query);
    let left = 0;
    let right = wordFreqs.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (wordFreqs[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    answer.push(wordFreqs.length - left);
  }

  return answer;
};
