/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const mapParantheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let check = [];
  for (let el of s) {
    if (el in mapParantheses) {
      check.push(el);
    } else if (mapParantheses[check.pop()] !== el) {
      return false;
    }
  }
  return !check.length;
};
