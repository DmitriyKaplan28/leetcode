/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function (n, rounds) {
  const sectorVisits = new Array(n + 1).fill(0);
  let maxVisits = 0;

  for (let i = 1; i < rounds.length; i++) {
    let start = rounds[i - 1];
    const end = rounds[i];

    while (start !== end) {
      sectorVisits[start]++;
      maxVisits = Math.max(maxVisits, sectorVisits[start]);
      start = start === n ? 1 : start + 1;
    }
  }

  sectorVisits[rounds[rounds.length - 1]]++;
  maxVisits = Math.max(maxVisits, sectorVisits[rounds[rounds.length - 1]]);

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (sectorVisits[i] === maxVisits) {
      result.push(i);
    }
  }

  return result;
};

console.log(mostVisited(3, [3, 2, 1, 2, 1, 3, 2, 1, 2, 1, 3, 2, 3, 1]));
