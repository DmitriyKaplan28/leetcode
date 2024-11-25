/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
var getMaxRepetitions = function (s1, n1, s2, n2) {
  const set1 = new Set(s1);
  for (const char of s2) {
    if (!set1.has(char)) return 0;
  }

  let count1 = 0,
    count2 = 0,
    index2 = 0;
  const len1 = s1.length,
    len2 = s2.length;

  const seen = new Map();

  while (count1 < n1) {
    count1++;

    for (let i = 0; i < len1; i++) {
      if (s1[i] === s2[index2]) {
        index2++;
        if (index2 === len2) {
          count2++;
          index2 = 0;
        }
      }
    }

    if (seen.has(index2)) {
      const [prevCount1, prevCount2] = seen.get(index2);
      const cycleLength = count1 - prevCount1;
      const cycleCount2 = count2 - prevCount2;

      const remainingCycles = Math.floor((n1 - count1) / cycleLength);
      count1 += remainingCycles * cycleLength;
      count2 += remainingCycles * cycleCount2;
    }

    seen.set(index2, [count1, count2]);
  }

  return Math.floor(count2 / n2);
};

console.log(getMaxRepetitions("acb", 4, "ab", 2)); // Output: 2
console.log(getMaxRepetitions("ab", 2, "acb", 1)); // Output: 0
