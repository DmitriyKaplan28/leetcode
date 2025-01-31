/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const diffMap = new Map();

  function getDifferenceArray(word) {
    const diff = [];
    for (let i = 0; i < word.length - 1; i++) {
      diff.push(word.charCodeAt(i + 1) - word.charCodeAt(i));
    }
    return diff.toString();
  }

  for (const word of words) {
    const diffStr = getDifferenceArray(word);
    if (!diffMap.has(diffStr)) {
      diffMap.set(diffStr, []);
    }
    diffMap.get(diffStr).push(word);
  }

  for (const [key, list] of diffMap) {
    if (list.length === 1) {
      return list[0]; 
    }
  }

  return "";
};

console.log(oddString(["adc","wzy","abc"]));
console.log(oddString(["aaa","bob","ccc","ddd"]));
