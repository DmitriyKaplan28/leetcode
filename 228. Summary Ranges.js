/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
        const result = [];

    let start = 0;

    for (let i = 0; i < nums.length; i++) {

        // Check if the current number is not consecutive

        if (i + 1 === nums.length || nums[i] + 1 !== nums[i + 1]) {

            if (start === i) {

                result.push(`${nums[start]}`);

            } else {

                result.push(`${nums[start]}->${nums[i]}`);

            }

            start = i + 1; // Update start for the next range

        }

    }

    return result
};
