/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var hasMatch = function (s, p) {
  let parts = p.split("*");

  let [prefix, suffix] = parts;
  let prefixIndex = s.indexOf(prefix);

  if (prefixIndex === -1) return false;

  let suffixIndex = s.indexOf(suffix, prefixIndex + prefix.length);

  return suffixIndex !== -1;
};

console.log(hasMatch("leetcode", "ee*e"));
console.log(hasMatch("car", "c*v"));
console.log(hasMatch("luck", "u*"));
