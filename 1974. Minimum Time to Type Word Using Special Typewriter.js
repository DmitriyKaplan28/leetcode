/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  let res = 0;
  let curr = "a".charCodeAt(0);

  for (let i = 0; word.length > i; i++) {
    const targetCharCode = word.charCodeAt(i);
    const movesForward = (targetCharCode - curr + 26) % 26;
    const movesBack = (curr - targetCharCode + 26) % 26;

    res += Math.min(movesForward, movesBack) + 1;

    curr = targetCharCode;
  }

  return res;
};
