/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {

    const n = nums.length;
    
    let minIndex = 0;
    let maxIndex = 0;
    
    for (let j = indexDifference; j < n; j++) {
        const candidatePos = j - indexDifference;
        
        if (nums[candidatePos] < nums[minIndex]) {
            minIndex = candidatePos;
        }
        if (nums[candidatePos] > nums[maxIndex]) {
            maxIndex = candidatePos;
        }
        
        if (Math.abs(nums[j] - nums[minIndex]) >= valueDifference) {
            return [minIndex, j];
        }
        if (Math.abs(nums[j] - nums[maxIndex]) >= valueDifference) {
            return [maxIndex, j];
        }
    }
    
    return [-1, -1];    
};
