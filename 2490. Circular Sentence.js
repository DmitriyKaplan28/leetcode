/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  const words = sentence.split(" ");
  const n = words.length;

  for (let i = 0; i < n - 1; i++) {
    const currentWord = words[i];
    const nextWord = words[i + 1];

    if (currentWord[currentWord.length - 1] !== nextWord[0]) {
      return false;
    }
  }
  if (words[n - 1][words[n - 1].length - 1] !== words[0][0]) {
    return false;
  }

  return true;
};
