/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let getCount = true,
    count = 0;
  for (let i = 0; i < s.length; i++) {
    if (getCount && s[i] === "*") {
      count++;
    }
    if (s[i] === "|") {
      getCount = !getCount;
    }
  }
  return count;
};
