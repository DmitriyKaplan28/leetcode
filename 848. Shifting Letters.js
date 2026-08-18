/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const n = s.length;
  let shiftAmount = 0;
  const result = [];

  for (let i = n - 1; i >= 0; i--) {
    shiftAmount += shifts[i];
    shiftAmount %= 26;

    const charCode = s.charCodeAt(i) - "a".charCodeAt(0);

    const newCharCode = (charCode + shiftAmount) % 26;

    result[i] = String.fromCharCode(newCharCode + "a".charCodeAt(0));
  }

  return result.join("");
};
