/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function(nums) {
    const n = nums.length;
    const i1 = nums.indexOf(1);
    const in_ = nums.indexOf(n);

    const move1 = i1;                    
    const moveN = (n - 1) - in_;         

    if (i1 > in_) return move1 + moveN - 1;
    return move1 + moveN;
};