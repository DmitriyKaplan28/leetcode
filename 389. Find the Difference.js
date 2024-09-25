/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  t = t.split("").sort();
  s = s.split("").sort();
  for (let i = 0; i < t.length; i++) {
    if (s[i] !== t[i]) return t[i];
  }
};

console.log(findTheDifference("abcd", "abcde"));
console.log(findTheDifference("", "a"));
console.log(findTheDifference("ae", "aea"));
