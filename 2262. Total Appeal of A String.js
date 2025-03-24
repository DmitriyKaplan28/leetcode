/**
 * @param {string} s
 * @return {number}
 */
var appealSum = function (s) {
  let total = 0;
  let lastSeen = new Array(26).fill(-1);

  for (let i = 0; i < s.length; i++) {
    let charIndex = s[i].charCodeAt(0) - "a".charCodeAt(0);

    let contribution = (i - lastSeen[charIndex]) * (s.length - i);
    total += contribution;

    lastSeen[charIndex] = i;
  }

  return total;
};

console.log(appealSum("abbca"));
console.log(appealSum("code"));
