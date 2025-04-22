/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const digitToLetters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const result = [];

  const backtrack = (index, current) => {
    if (index === digits.length) {
      result.push(current);
      return;
    }

    const letters = digitToLetters[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      backtrack(index + 1, current + letters[i]);
    }
  };

  backtrack(0, "");
  return result;
};
