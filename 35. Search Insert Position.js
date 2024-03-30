/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const firstIndex = nums.indexOf(target);
    let index;
    if(firstIndex == -1){
        for(let i =0; i < nums.length; i++){
            if(nums[i] > target) {
                nums.push(nums[i], target);
                return i
            }
        }
        return nums?.length
    } else {
        index = firstIndex
    }
    return index
};