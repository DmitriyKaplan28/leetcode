/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  words.sort((a, b) => {
    if (a.length !== b.length) {
      return b.length - a.length;
    }
    return a.localeCompare(b);
  });

  const wordSet = new Set(words);

  for (const word of words) {
    let isValid = true;
    for (let i = 1; i < word.length; i++) {
      const prefix = word.substring(0, i);
      if (!wordSet.has(prefix)) {
        isValid = false;
        break;
      }
    }
    if (isValid) {
      return word;
    }
  }

  return "";
};

console.log(longestWord(["w","wo","wor","worl", "world"]));
console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]));