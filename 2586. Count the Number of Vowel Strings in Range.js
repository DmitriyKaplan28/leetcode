/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  const vowels = ["a", "e", "i", "o", "u"];
  const range = words.slice(left, right + 1);
  let count = 0;
  range.forEach((el) => {
    const n = el.length;
    if (vowels.includes(el[0]) && vowels.includes(el[n - 1])) count++;
  });
  return count;
};
console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
