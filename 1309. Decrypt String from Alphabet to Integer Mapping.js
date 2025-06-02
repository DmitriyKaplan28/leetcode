/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (i + 2 < s.length && s[i + 2] === "#") {
      const num = parseInt(s[i] + s[i + 1]);
      result += String.fromCharCode(num + 96);
      i += 2;
    } else {
      result += String.fromCharCode(parseInt(s[i]) + 96);
    }
  }
  return result;
};
