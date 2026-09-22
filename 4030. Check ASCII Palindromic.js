/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindromic = function (s) {
  let binary = "";

  for (let i = 0; i < s.length; i++) {
    binary += s.charCodeAt(i).toString(2).padStart(8, "0");
  }

  return binary === binary.split("").reverse().join("");
};
