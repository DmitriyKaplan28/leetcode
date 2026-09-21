/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var countRotations = function (s, k) {
  const n = s.length;

  if (n === 1) {
    return k === 0 ? 1 : 0;
  }

  let equalOnCycle = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === s[(i + 1) % n]) {
      equalOnCycle++;
    }
  }

  const target = equalOnCycle - k;
  if (target !== 0 && target !== 1) {
    return 0;
  }

  let answer = 0;
  for (let i = 0; i < n; i++) {
    const cutIsEqual = s[(i - 1 + n) % n] === s[i];
    if (cutIsEqual === (target === 1)) {
      answer++;
    }
  }

  return answer;
};
