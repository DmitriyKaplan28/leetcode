/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function (words) {
  function getCharacterSet(word) {
    return Array.from(new Set(word)).sort().join("");
  }

  const characterSets = words.map(getCharacterSet);
  let count = 0;

  for (let i = 0; i < characterSets.length; i++) {
    for (let j = i + 1; j < characterSets.length; j++) {
      if (characterSets[i] === characterSets[j]) {
        count++;
      }
    }
  }

  return count;
};
