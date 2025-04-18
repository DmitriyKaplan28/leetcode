/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closetTarget = function (words, target, startIndex) {
  const n = words.length;
  let minDistance = Infinity;

  if (!words.includes(target)) {
    return -1;
  }

  for (let i = 0; i < n; i++) {
    if (words[i] === target) {
      const forwardDist = (i - startIndex + n) % n;
      const backwardDist = (startIndex - i + n) % n;
      minDistance = Math.min(minDistance, forwardDist, backwardDist);
    }
  }

  return minDistance;
};

console.log(closetTarget(["hello", "world", "leetcode"], "hello", 1));
console.log(closetTarget(["a", "b", "leetcode"], "leetcode", 0));
console.log(closetTarget(["i", "eat", "leetcode"], "ate", 0));
console.log(closetTarget(["a", "b", "c"], "c", 0));
