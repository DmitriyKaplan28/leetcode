/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let newStr = "";
    for (let i = 0; i < s.length; i += k) {
      let group = s.slice(i, i + k);
      let groupSum = group
        .split("")
        .reduce((sum, char) => sum + Number(char), 0);
      newStr += groupSum.toString();
    }
    s = newStr;
  }
  return s;
};

