/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countOppositeParity = function(nums) {
    const n = nums.length;
    let evenCount = 0;
    let oddCount = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        const currentParity = nums[i] % 2;
        if (currentParity === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    
    const answer = new Array(n);
    
    for (let i = 0; i < n; i++) {
        if (nums[i] % 2 === 0) {
            evenCount--;
            answer[i] = oddCount;
        } else {
            oddCount--;
            answer[i] = evenCount;
        }
    }
    
    return answer;
};
