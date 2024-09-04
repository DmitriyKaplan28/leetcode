/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const sArr = s.split(" ");
  if (pattern.length !== sArr.length) return false;
  const map1 = new Map();
  const map2 = new Map();
  for (let i = 0; i < pattern.length; i++) {
    if (!map1.has(pattern[i], sArr[i])) {
      map1.set(pattern[i], sArr[i]);
    }
    if (!map2.has(sArr[i], pattern[i])) {
      map2.set(sArr[i], pattern[i]);
    }
    if (map1.get(pattern[i]) !== sArr[i] || map2.get(sArr[i]) !== pattern[i]) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog constructor constructor dog"));
