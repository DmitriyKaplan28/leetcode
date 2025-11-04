/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  const matches = (word, pattern) => {
    if (word.length !== pattern.length) return false;
    const pToW = new Map();
    const wToP = new Map();
    for (let i = 0; i < word.length; i++) {
      const wc = word[i];
      const pc = pattern[i];
      if (pToW.has(pc) && pToW.get(pc) !== wc) return false;
      if (wToP.has(wc) && wToP.get(wc) !== pc) return false;
      pToW.set(pc, wc);
      wToP.set(wc, pc);
    }
    return true;
  };
  return words.filter((w) => matches(w, pattern));
};

console.log(findAndReplacePattern(["abc", "deq", "mee", "aqq", "dkd", "ccc"], "abb"));
console.log(findAndReplacePattern(["a", "b", "c"], "a"));