/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    const covered = new Set();
    
    for (let [start, end] of nums) {
        for (let p = start; p <= end; p++) {
            covered.add(p);
        }
    }
    
    return covered.size;
};
