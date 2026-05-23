/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minDistinctFreqPair = function(nums) {
   const freq = new Map();

    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    const values = [...freq.keys()].sort((a, b) => a - b);

    for (let i = 0; i < values.length; i++) {
        for (let j = i + 1; j < values.length; j++) {
            const x = values[i];
            const y = values[j];

            if (freq.get(x) !== freq.get(y)) {
                return [x, y];
            }
        }
    }

    return [-1, -1]; 
};
