/**
 * @param {string} startGene
 * @param {string} endGene
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function (startGene, endGene, bank) {
  if (startGene === endGene) return 0;
  const bankSet = new Set(bank);
  if (!bankSet.has(endGene)) return -1;

  const genes = ["A", "C", "G", "T"];
  const visited = new Set([startGene]);
  const queue = [[startGene, 0]];

  while (queue.length) {
    const [current, steps] = queue.shift();
    if (current === endGene) return steps;

    for (let i = 0; i < current.length; i++) {
      for (const ch of genes) {
        if (ch === current[i]) continue;
        const next = current.slice(0, i) + ch + current.slice(i + 1);
        if (bankSet.has(next) && !visited.has(next)) {
          visited.add(next);
          queue.push([next, steps + 1]);
        }
      }
    }
  }

  return -1;
};

console.log(minMutation("AACCGGTT", "AACCGGTA", ["AACCGGTA"]));
console.log(
  minMutation("AACCGGTT", "AAACGGTA", ["AACCGGTA", "AACCGCTA", "AAACGGTA"])
);
