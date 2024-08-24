/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
  let res = [];
  let less = 0;
  let more = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I") {
      res.push(less++);
    } else {
      res.push(more--);
    }
  }
  res.push(less);
  return res;
};
