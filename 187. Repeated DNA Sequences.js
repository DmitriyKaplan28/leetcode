/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const SEQ_LEN = 10;
  const result = new Set();
  const seen = new Set();

  if (s.length < SEQ_LEN) return [];

  for (let i = 0; i <= s.length - SEQ_LEN; i++) {
    const sub = s.slice(i, i + SEQ_LEN);
    if (seen.has(sub)) {
      result.add(sub);
    } else {
      seen.add(sub);
    }
  }

  return Array.from(result);
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));