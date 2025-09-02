/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let max = 0;
  const n = words.length;
  const masks = new Array(n);
  const lengths = new Array(n);

  for (let i = 0; i < n; i++) {
    let mask = 0;
    const w = words[i];
    for (let k = 0; k < w.length; k++) {
      const bit = w.charCodeAt(k) - 97;
      mask |= 1 << bit;
    }
    masks[i] = mask;
    lengths[i] = w.length;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ((masks[i] & masks[j]) === 0) {
        const prod = lengths[i] * lengths[j];
        if (prod > max) max = prod;
      }
    }
  }

  return max;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
