/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let num = s
    .split("")
    .map((char) => char.charCodeAt(0) - "a".charCodeAt(0) + 1)
    .join(""); 

  let res = num.split("").reduce((sum, digit) => sum + Number(digit), 0); 

  for (let i = 1; i < k; i++) {
    res = res
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return res;
};
