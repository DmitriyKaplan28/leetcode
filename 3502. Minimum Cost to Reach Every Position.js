/**
 * @param {number[]} cost
 * @return {number[]}
 */
var minCosts = function (cost) {
    const n = cost.length;
    const answer = new Array(n);
    let minSoFar = Infinity;
    for (let i = 0; i < n; i++) {
        minSoFar = Math.min(minSoFar, cost[i]);
        answer[i] = minSoFar;
    }
    return answer;
};