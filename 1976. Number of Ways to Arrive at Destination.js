/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const graph = new Array(n).fill().map(() => []);
  for (const [u, v, time] of roads) {
    graph[u].push([v, time]);
    graph[v].push([u, time]);
  }

  const dist = new Array(n).fill(Infinity);
  const ways = new Array(n).fill(0);
  const MOD = 1e9 + 7;

  const pq = [[0, 0]];
  dist[0] = 0;
  ways[0] = 1;

  while (pq.length > 0) {
    const [time, node] = pq.shift();

    if (time > dist[node]) continue;

    for (const [neighbor, edgeTime] of graph[node]) {
      const newTime = time + edgeTime;

      if (newTime < dist[neighbor]) {
        dist[neighbor] = newTime;
        ways[neighbor] = ways[node];
        pq.push([newTime, neighbor]);
        pq.sort((a, b) => a[0] - b[0]);
      } else if (newTime === dist[neighbor]) {
        ways[neighbor] = (ways[neighbor] + ways[node]) % MOD;
      }
    }
  }

  return ways[n - 1];
};
