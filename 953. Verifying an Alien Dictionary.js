/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  let orderMap = {};
  for (let i = 0; i < order.length; i++) {
    orderMap[order[i]] = i;
  }

  for (let i = 0; i < words.length - 1; i++) {
    if (!isInCorrectOrder(words[i], words[i + 1], orderMap)) {
      return false;
    }
  }

  return true;
};

function isInCorrectOrder(word1, word2, orderMap) {
  let minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    let char1 = word1[i],
      char2 = word2[i];

    if (orderMap[char1] < orderMap[char2]) {
      return true;
    } else if (orderMap[char1] > orderMap[char2]) {
      return false;
    }
  }

  return word1.length <= word2.length;
}
