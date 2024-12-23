/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let max = 1;
  let temp = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      temp++;
    } else {
      max = Math.max(max, temp);
      temp = 1;
    }
  }

  return Math.max(max, temp);
};

console.log(maxPower("aa"));
