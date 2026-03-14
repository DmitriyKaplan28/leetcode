/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
    let max = events[0][1];
    let res = events[0][0];

    for (let i = 1; i < events.length; i++) {
        const [idx, t] = events[i];
        const diff = t - events[i - 1][1];

        if (diff > max || (diff === max && idx < res)) {
            max = diff;
            res = idx;
        }
    }

    return res;
};
