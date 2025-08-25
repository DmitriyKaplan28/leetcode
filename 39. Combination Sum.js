/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  candidates.sort((a, b) => a - b);

  function backtrack(start, currentSum, currentCombination) {
    if (currentSum === target) {
      result.push([...currentCombination]);
      return;
    }

    if (currentSum > target) {
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      const candidate = candidates[i];

      if (currentSum + candidate > target) {
        break;
      }

      currentCombination.push(candidate);

      backtrack(i, currentSum + candidate, currentCombination);

      currentCombination.pop();
    }
  }

  backtrack(0, 0, []);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
console.log(combinationSum([2, 3, 5], 8));
console.log(combinationSum([2], 1));
