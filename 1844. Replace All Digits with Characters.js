/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let letters = [];
  for (let i = 0; i < s.length; i++) {
    if (i & 1) {
      letters.push(String.fromCharCode(s.charCodeAt(i - 1) + +s[i]));
    } else {
      letters.push(s[i]);
    }
  }
  return letters.join("");
};
