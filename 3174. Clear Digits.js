/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) result.pop();
    else result.push(s[i]);
  }
  return result.join("");
};
