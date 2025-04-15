/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let i = 0;
  let sign = 1;
  let result = 0;

  while (s[i] === " ") {
    i++;
  }

  if (s[i] === "-" || s[i] === "+") {
    sign = s[i] === "-" ? -1 : 1;
    i++;
  }

  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    const digit = s[i] - "0";

    if (result > Math.floor((2 ** 31 - 1 - digit) / 10)) {
      return sign === 1 ? 2 ** 31 - 1 : -(2 ** 31);
    }

    result = result * 10 + digit;
    i++;
  }

  return sign * result;
};

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("words and 987"));
