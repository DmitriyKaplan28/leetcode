/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
    const matches = (q) => {
        let j = 0;
        for (let i = 0; i < q.length; i++) {
            if (j < pattern.length && q[i] === pattern[j]) {
                j++;
            } else if (q[i] < 'a' || q[i] > 'z') {
                return false;
            }
        }
        return j === pattern.length;
    };
    return queries.map(matches);
};