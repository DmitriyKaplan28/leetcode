/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    const result = [];

    function backtrack(start, path, remaining) {
        if (path.length === k && remaining === 0) {
            result.push([...path]);
            return;
        }

        if (path.length > k || remaining < 0) {
            return;
        }

        for (let num = start; num <= 9; num++) {
            path.push(num);
            backtrack(num + 1, path, remaining - num);
            path.pop();
        }
    }

    backtrack(1, [], n);
    return result;
};