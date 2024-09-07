/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return nums.length !== Array.from(new Set(nums)).length
};

console.log(containsDuplicate([1,2,3]));
console.log(containsDuplicate([1,2,3,1]));
