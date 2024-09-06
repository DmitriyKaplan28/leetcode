/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let map = {};
  for (const letter of magazine) {
    map[letter] = (map[letter] || 0) + 1;
  }
  for (const letter of ransomNote) {
    if (!map[letter]) return false;
    map[letter]--;
  }
  return true;
};
