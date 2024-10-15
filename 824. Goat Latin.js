/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  const words = sentence.split(" ");
  return words
    .map((word, index) => {
      let goatLatinWord;

      if (vowels.has(word[0].toLowerCase())) {
        goatLatinWord = word + "ma";
      } else {
        goatLatinWord = word.slice(1) + word[0] + "ma";
      }
      goatLatinWord += "a".repeat(index + 1);

      return goatLatinWord;
    })
    .join(" ");
};
