/**
 * @param {number[][]} tasks
 * @return {number}
 */
var earliestTime = function (tasks) {
    let answer = Infinity;
    for (const [s, t] of tasks) {
        answer = Math.min(answer, s + t);
    }
    return answer;
};