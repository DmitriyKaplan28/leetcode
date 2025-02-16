/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  if (s.length < 3) return s;
  let res = [s[0], s[1]];

  for (let i = 2; i < s.length; i++) {
    if (!(s[i] === s[i-1] && s[i] === s[i-2])) res.push(s[i])
  }

  return res.join('')
};

console.log(makeFancyString("leeetcode"));
console.log(makeFancyString("aaabaaaa"));
console.log(makeFancyString("aab"));

