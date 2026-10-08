/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const parent = Array.from({ length: s.length }, (_, index) => index);
  const rank = Array(s.length).fill(0);

  const find = function (index) {
    if (parent[index] !== index) {
      parent[index] = find(parent[index]);
    }
    return parent[index];
  };

  const union = function (first, second) {
    let firstRoot = find(first);
    let secondRoot = find(second);
    if (firstRoot === secondRoot) {
      return;
    }

    if (rank[firstRoot] < rank[secondRoot]) {
      [firstRoot, secondRoot] = [secondRoot, firstRoot];
    }
    parent[secondRoot] = firstRoot;
    if (rank[firstRoot] === rank[secondRoot]) {
      rank[firstRoot]++;
    }
  };

  for (const [first, second] of pairs) {
    union(first, second);
  }

  const components = new Map();
  for (let index = 0; index < s.length; index++) {
    const root = find(index);
    if (!components.has(root)) {
      components.set(root, []);
    }
    components.get(root).push(s[index]);
  }

  for (const characters of components.values()) {
    characters.sort();
  }

  const positions = new Map();
  let result = "";
  for (let index = 0; index < s.length; index++) {
    const root = find(index);
    const nextCharacter = positions.get(root) || 0;
    result += components.get(root)[nextCharacter];
    positions.set(root, nextCharacter + 1);
  }

  return result;
};
