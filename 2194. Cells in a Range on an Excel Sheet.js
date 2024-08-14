/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function (s) {
  let res = [];
  for (let i = s.charCodeAt(0); i <= s.charCodeAt(3); i++) {
    let x = +s[1];
    while (x <= +s[4]) {
      res.push(String.fromCharCode(i) + x);
      x++;
    }
  }
  return res;
};
