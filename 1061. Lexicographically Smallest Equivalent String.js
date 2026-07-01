/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function (s1, s2, baseStr) {
  const parent = Array.from({ length: 26 }, (_, i) => i);

  const find = (x) => {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  };

  const union = (a, b) => {
    let pa = find(a);
    let pb = find(b);
    if (pa === pb) return;
    if (pa < pb) parent[pb] = pa;
    else parent[pa] = pb;
  };

  for (let i = 0; i < s1.length; i++) {
    union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
  }

  let res = "";
  for (const ch of baseStr) {
    res += String.fromCharCode(find(ch.charCodeAt(0) - 97) + 97);
  }

  return res;
};
