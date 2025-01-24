/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  const n = s.length;
  if (n <= 1) return s;

  function buildKMPTable(str) {
    const table = Array(str.length).fill(0);
    let j = 0; 
    for (let i = 1; i < str.length; i++) {
      while (j > 0 && str[i] !== str[j]) {
        j = table[j - 1];
      }
      if (str[i] === str[j]) {
        j++;
      }
      table[i] = j;
    }
    return table;
  }

  const reversed = s.split("").reverse().join("");
  const combined = s + "#" + reversed;

  const table = buildKMPTable(combined);

  const palindromePrefixLength = table[table.length - 1];

  const toAdd = s.slice(palindromePrefixLength).split("").reverse().join("");

  return toAdd + s;
};


console.log(shortestPalindrome("aacecaaa"));
console.log(shortestPalindrome("abcd"));
