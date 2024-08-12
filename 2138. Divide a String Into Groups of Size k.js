/**
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
var divideString = function (s, k, fill) {
  const res = [];
  for (let i = 0; i < s.length; i += k) {
    let temp = "";
    for (let j = i; j < k + i; j++) {
      temp += s[j] || fill;
    }
    res.push(temp);
  }
  return res;
};
