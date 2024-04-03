/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  let prev = 0;
  let sum = 0;

  for (const el of s) {
    const num = map[el];
    sum += num;
    if (prev < num) {
      sum -= prev * 2;
    }
    prev = num;
  }
  return sum;
};
