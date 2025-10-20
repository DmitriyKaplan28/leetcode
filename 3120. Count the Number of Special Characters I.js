/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function (word) {
  const lower = new Set();
  const upper = new Set();

  for (const ch of word) {
    if (ch >= "a" && ch <= "z") lower.add(ch);
    else if (ch >= "A" && ch <= "Z") upper.add(ch);
  }

  let count = 0;
  for (let i = 0; i < 26; i++) {
    const lc = String.fromCharCode(97 + i);
    const uc = String.fromCharCode(65 + i);
    if (lower.has(lc) && upper.has(uc)) count++;
  }

  return count;
};
