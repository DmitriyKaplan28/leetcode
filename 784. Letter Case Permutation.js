/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const result = [];

  const backtrack = (current, index) => {
    if (index === s.length) {
      result.push(current);
      return;
    }

    const char = s[index];

    if (char >= "0" && char <= "9") {
      backtrack(current + char, index + 1);
    } else {
      backtrack(current + char.toLowerCase(), index + 1);
      backtrack(current + char.toUpperCase(), index + 1);
    }
  };

  backtrack("", 0);
  return result;
};

console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3z4"));
