/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1])

  let removed = 0
  let end = -Infinity

  for (const [start, finish] of intervals) {
    if (start >= end) {
      end = finish
    } else {
      removed++
    }
  }

  return removed
};
