/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countKConstraintSubstrings = function (s, k) {
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    let countZero = 0,countOne = 0;
    for (let j = i; j < s.length; j++) {
      countZero += s[j] === "0" ? 1 : 0;
      countOne += s[j] === "1" ? 1 : 0;
      if (countZero > k && countOne > k) break;
      res++;
    }
  }
  return res;
};

console.log(countKConstraintSubstrings("10101", 1))
