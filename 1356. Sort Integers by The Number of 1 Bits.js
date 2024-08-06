/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  arr.sort((a, b) => binary(a) * 10000 + a - (binary(b) * 10000 + b));
  return arr;
};

const binary = (number) => {
  let res = 0;
  while (number) {
    number = number & (number - 1);
    res++;
  }
  return res;
};
