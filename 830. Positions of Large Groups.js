/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let res = [];
  let start = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1 || s[i] !== s[i + 1]) {
      if (i - start + 1 >= 3) {
        res.push([start, i]);
      }
      start = i + 1;
    }
  }
  
  return res;
};
