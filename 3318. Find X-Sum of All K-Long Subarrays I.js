/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function(nums, k, x) {
    const n = nums.length;
    const result = [];
    
    for (let i = 0; i <= n - k; i++) {
        const subarray = nums.slice(i, i + k);
        
        const freqMap = new Map();
        for (const num of subarray) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }
        
        const elements = Array.from(freqMap.entries());
        
        elements.sort((a, b) => {
            if (a[1] !== b[1]) {
                return b[1] - a[1];
            }
            return b[0] - a[0];
        });
        
        const topElements = elements.slice(0, x);
        
        let sum = 0;
        for (const [value, freq] of topElements) {
            sum += value * freq;
        }
        
        result.push(sum);
    }
    
    return result;
    
};
