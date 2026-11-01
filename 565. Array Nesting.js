/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function(nums) {
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        let current = i;

        while (nums[current] !== -1) {
            let next = nums[current];
            nums[current] = -1;
            current = next;
            count++;
        }

        maxLength = Math.max(maxLength, count);
    }

    return maxLength;
};
