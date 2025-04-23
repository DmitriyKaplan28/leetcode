/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  const letters = [];
  const digits = [];

  for (const char of s) {
    if (isNaN(char)) {
      letters.push(char);
    } else {
      digits.push(char);
    }
  }

  if (Math.abs(letters.length - digits.length) > 1) {
    return "";
  }

  const result = [];
  let i = 0,
    j = 0;

  if (letters.length > digits.length) {
    result.push(letters[i++]);
  }

  while (i < letters.length && j < digits.length) {
    result.push(digits[j++]);
    result.push(letters[i++]);
  }

  if (j < digits.length) {
    result.push(digits[j]);
  }

  return result.join("");
};

console.log(reformat("a0b1c2"));
console.log(reformat("leetcode"));
console.log(reformat("1229857369"));

