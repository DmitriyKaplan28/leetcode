/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles = function (s, queries) {
  const n = s.length;
  const prefixSum = new Array(n + 1).fill(0);
  const leftCandles = new Array(n).fill(-1);
  const rightCandles = new Array(n).fill(-1);

  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + (s[i] === "*" ? 1 : 0);
  }

  let lastCandle = -1;
  for (let i = 0; i < n; i++) {
    if (s[i] === "|") {
      lastCandle = i;
    }
    leftCandles[i] = lastCandle;
  }

  lastCandle = -1;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === "|") {
      lastCandle = i;
    }
    rightCandles[i] = lastCandle;
  }

  return queries.map(([left, right]) => {
    const rightCandle = leftCandles[right];
    const leftCandle = rightCandles[left];

    if (leftCandle === -1 || rightCandle === -1 || leftCandle >= rightCandle) {
      return 0;
    }

    return prefixSum[rightCandle + 1] - prefixSum[leftCandle];
  });
};

console.log(
  platesBetweenCandles("**|**|***|", [
    [2, 5],
    [5, 9],
  ])
);
console.log(
  platesBetweenCandles("***|**|*****|**||**|*", [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ])
);
