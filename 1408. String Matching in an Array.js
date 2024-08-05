/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  const res = [];

  words.sort((a, b) => b.length - a.length);
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (words[j].includes(words[i])) {
        res.push(words[i]);
        break;
      }
    }
  }
  return res;
};

console.log(stringMatching(["mass", "as", "hero", "superhero"]));
