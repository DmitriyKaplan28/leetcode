/**
 * @param {number} n
 * @return {number}
 */
var minimumFlips = function (n) {
  const s = n.toString(2);
  const reversed = s.split("").reverse().join("");
  let flips = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== reversed[i]) {
      flips++;
    }
  }

  return flips;
};

console.log(minimumFlips(10));
console.log(minimumFlips(7));
