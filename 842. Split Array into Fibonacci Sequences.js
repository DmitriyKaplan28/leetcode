/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {
  const n = num.length;
  const MAX = 2147483647n;

  function parsePiece(start, end) {
    if (start >= end) return null;
    if (num[start] === "0" && end - start > 1) return null;

    const slice = num.slice(start, end);
    const value = BigInt(slice);
    if (value > MAX) return null;

    return Number(value);
  }

  function dfs(index, prev1, prev2, seq) {
    if (index === n) {
      return seq.length >= 3;
    }

    const nextBig = BigInt(prev1) + BigInt(prev2);
    if (nextBig > MAX) {
      return false;
    }

    const nextStr = nextBig.toString();
    const end = index + nextStr.length;
    if (end > n || num.slice(index, end) !== nextStr) {
      return false;
    }

    const nextValue = Number(nextBig);
    seq.push(nextValue);
    if (dfs(end, prev2, nextValue, seq)) {
      return true;
    }
    seq.pop();
    return false;
  }

  for (let firstLen = 1; firstLen <= n - 2; firstLen++) {
    if (num[0] === "0" && firstLen > 1) break;

    const first = parsePiece(0, firstLen);
    if (first === null) continue;

    for (let secondLen = 1; secondLen < n - firstLen; secondLen++) {
      const secondStart = firstLen;
      const secondEnd = secondStart + secondLen;
      if (num[secondStart] === "0" && secondLen > 1) break;

      const second = parsePiece(secondStart, secondEnd);
      if (second === null) continue;

      const seq = [first, second];
      if (dfs(secondEnd, first, second, seq)) {
        return seq;
      }
    }
  }

  return [];
};
