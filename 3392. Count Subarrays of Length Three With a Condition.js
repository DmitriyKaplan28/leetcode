/**
 * @param {number[]} nums
 * @return {number}
 */
var countSubarrays = function(nums) {
    let count = 0;
    
    for (let i = 0; i <= nums.length - 3; i++) {
        const first = nums[i];
        const second = nums[i + 1];
        const third = nums[i + 2];
        
        if (2 * (first + third) === second) {
            count++;
        }
    }
    
    return count;
};
