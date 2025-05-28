/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function (s) {
  let degree = 0;
  for (let i = 0; i < s.length; i++) {
    let alphabetIndex = s[i].charCodeAt(0) - "a".charCodeAt(0);
    const letterDegree = (26 - alphabetIndex) * (i + 1);
    degree += letterDegree;
  }
  return degree;
};

console.log(reverseDegree("abc"));
console.log(reverseDegree("zaza"));
