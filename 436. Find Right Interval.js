/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
   const starts = intervals.map((interval, index) => [interval[0], index]);
    starts.sort((a, b) => a[0] - b[0]);

    const result = new Array(intervals.length).fill(-1);

    for (let i = 0; i < intervals.length; i++) {
        let left = 0;
        let right = starts.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (starts[mid][0] >= intervals[i][1]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        if (left < starts.length) {
            result[i] = starts[left][1];
        }
    }

    return result; 
};
