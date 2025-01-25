/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  if (s1 === s2) return true; 
  if (s1.length !== s2.length) return false; 

  const memo = new Map();

  function helper(str1, str2) {
    const key = `${str1}-${str2}`;
    if (memo.has(key)) return memo.get(key);

    if (str1 === str2) {
      memo.set(key, true);
      return true;
    }

    if (str1.length !== str2.length) {
      memo.set(key, false);
      return false;
    }

    const n = str1.length;

    if ([...str1].sort().join("") !== [...str2].sort().join("")) {
      memo.set(key, false);
      return false;
    }

    for (let i = 1; i < n; i++) {
      const left1 = str1.slice(0, i);
      const right1 = str1.slice(i);

      const left2 = str2.slice(0, i);
      const right2 = str2.slice(i);

      const swappedLeft2 = str2.slice(n - i);
      const swappedRight2 = str2.slice(0, n - i);

      if (
        (helper(left1, left2) && helper(right1, right2)) ||
        (helper(left1, swappedLeft2) && helper(right1, swappedRight2))
      ) {
        memo.set(key, true);
        return true;
      }
    }

    memo.set(key, false);
    return false;
  }

  return helper(s1, s2);
};

console.log(isScramble("great", "rgeat")); 
console.log(isScramble("abcde", "caebd")); 
console.log(isScramble("a", "a"));
