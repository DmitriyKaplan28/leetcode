/**
 * @param {string} s
 * @return {boolean}
 */
var scoreBalance = function (s) {
  const n = s.length;

  const charScore = (char) => char.charCodeAt(0) - "a".charCodeAt(0) + 1;

  for (let i = 1; i < n; i++) {
    let leftScore = 0;
    let rightScore = 0;

    for (let j = 0; j < i; j++) {
      leftScore += charScore(s[j]);
    }

    for (let j = i; j < n; j++) {
      rightScore += charScore(s[j]);
    }

    if (leftScore === rightScore) {
      return true;
    }
  }

  return false;
};

console.log(scoreBalance("adcb"));
console.log(scoreBalance("bace"));