/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    const freq = new Array(26).fill(0);

    for (const task of tasks) {
        freq[task.charCodeAt(0) - 65]++;
    }

    freq.sort((a, b) => b - a);

    const maxFreq = freq[0];
    let maxCount = 0;

    for (const count of freq) {
        if (count === maxFreq) {
            maxCount++;
        }
    }

    return Math.max(
        tasks.length,
        (maxFreq - 1) * (n + 1) + maxCount
    );
};
