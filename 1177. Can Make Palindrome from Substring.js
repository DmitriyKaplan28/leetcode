/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var canMakePaliQueries = function (s, queries) {
  const prefixParity = new Array(s.length + 1).fill(0);

  for (let i = 0; i < s.length; i++) {
    prefixParity[i + 1] = prefixParity[i] ^ (1 << (s.charCodeAt(i) - 97));
  }

  return queries.map(([left, right, k]) => {
    let oddCount = prefixParity[right + 1] ^ prefixParity[left];
    let replacementsNeeded = 0;

    while (oddCount !== 0) {
      oddCount &= oddCount - 1;
      replacementsNeeded++;
    }

    return Math.floor(replacementsNeeded / 2) <= k;
  });
};
