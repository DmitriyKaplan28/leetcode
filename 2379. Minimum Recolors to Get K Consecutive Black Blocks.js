/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let n = blocks.length;
  let res = k;
  let currentBlackCount = 0;

  for (let i = 0; i < k; i++) {
    if (blocks[i] === "B") {
      currentBlackCount++;
    }
  }

  res = Math.min(res, k - currentBlackCount);

  for (let i = k; i < n; i++) {
    if (blocks[i] === "B") {
      currentBlackCount++;
    }
    if (blocks[i - k] === "B") {
      currentBlackCount--;
    }
    res = Math.min(res, k - currentBlackCount);
  }

  return res;
};
