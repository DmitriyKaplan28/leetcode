/**
 * @param {number[][]} intervals
 * @return {number}
 */
var countIntersectingIntervals = function(intervals) {
    const events = [];

    for (const [start, end] of intervals) {
        events.push([start, 0]);
        events.push([end, 1]);
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let active = 0;
    let count = 0;

    for (const [, type] of events) {
        if (type === 0) {
            count += active;
            active++;
        } else {
            active--;
        }
    }

    return count;
};
