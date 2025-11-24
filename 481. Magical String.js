/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
  if (n <= 0) return 0;
  if (n <= 3) return [0, 1, 1, 1][n];

  const s = [1, 2, 2];
  let onesCount = 1;
  let readIdx = 2;
  let nextNum = 1;

  while (s.length < n) {
    const repeat = s[readIdx];
    for (let i = 0; i < repeat && s.length < n; i++) {
      s.push(nextNum);
      if (nextNum === 1) onesCount++;
    }
    nextNum = nextNum === 1 ? 2 : 1;
    readIdx++;
  }

  return onesCount;
};
