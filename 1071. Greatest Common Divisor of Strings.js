/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  const gcdLength = gcd(str1.length, str2.length);

  return str1.substring(0, gcdLength);
};

console.log(gcdOfStrings("ABCABC", "ABC"))