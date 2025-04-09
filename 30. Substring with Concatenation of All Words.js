/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  const result = [];
  if (!s || !words || !words.length) return result;

  const wordLen = words[0].length;
  const totalWords = words.length;
  const totalLen = wordLen * totalWords;

  const wordFreq = new Map();
  for (const word of words) {
    wordFreq.set(word, (wordFreq.get(word) || 0) + 1);
  }

  for (let i = 0; i <= s.length - totalLen; i++) {
    if (checkSubstring(i)) {
      result.push(i);
    }
  }

  function checkSubstring(start) {
    const seen = new Map();

    for (let j = 0; j < totalWords; j++) {
      const wordStart = start + j * wordLen;
      const currentWord = s.slice(wordStart, wordStart + wordLen);

      if (!wordFreq.has(currentWord)) {
        return false;
      }

      seen.set(currentWord, (seen.get(currentWord) || 0) + 1);

      if (seen.get(currentWord) > wordFreq.get(currentWord)) {
        return false;
      }
    }

    return true;
  }

  return result;
};
