/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    const newIndex = (i + k) % s.length;
    result.push(s[newIndex]);
  }

  return result.join("");
};

console.log(getEncryptedString("dart"));
console.log(getEncryptedString("aaa"));
