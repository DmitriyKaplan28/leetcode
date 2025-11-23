/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function(n, k) {
    const visited = new Array(n).fill(false);
  let current = 0;
  let step = 1;

  while (!visited[current]) {
    visited[current] = true;
    current = (current + step * k) % n;
    step++;
  }

  const losers = [];
  for (let i = 0; i < n; i++) {
    if (!visited[i]) losers.push(i + 1);
  }

  return losers;
};
