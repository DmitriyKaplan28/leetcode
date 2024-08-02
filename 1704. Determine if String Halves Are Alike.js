/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let part1 = s.substring(0, s.length / 2).split("");
  let part2 = s.substring(s.length / 2, s.length).split("");
  let count = 0;
  let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < part1.length; i++) {
    if (arr.includes(part2[i])) {
      count++;
    }
    if (arr.includes(part1[i])) {
      count--;
    }
  }
  return count === 0;
};
