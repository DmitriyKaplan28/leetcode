/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    function isAnagram(w1, w2) {
    return w1.split('').sort().join('') === w2.split('').sort().join('');

  }

  let result = [words[0]];
  for (let i = 1; i < words.length; i++) {
    if (!isAnagram(words[i], result[result.length - 1])) {
      result.push(words[i]);
    }

  }

  return result;
};
