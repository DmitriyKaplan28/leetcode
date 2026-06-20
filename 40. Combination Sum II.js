/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);

    const result = [];

    function backtrack(start, remain, combination) {
        if (remain === 0) {
            result.push([...combination]);
            return;
        }

        if (remain < 0) return;

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            if (candidates[i] > remain) {
                break;
            }

            combination.push(candidates[i]);
            backtrack(i + 1, remain - candidates[i], combination);
            combination.pop();
        }
    }

    backtrack(0, target, []);
    return result;
};
