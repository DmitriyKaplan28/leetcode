/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
    let best = 1;
    let inc = 1;
    let dec = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) inc += 1;
        else inc = 1;

        if (nums[i] < nums[i - 1]) dec += 1;
        else dec = 1;

        if (inc > best) best = inc;
        if (dec > best) best = dec;
    }

    return best;
};

console.log(longestMonotonicSubarray([1,4,3,3,2]));
console.log(longestMonotonicSubarray([3,3,3,3]));
console.log(longestMonotonicSubarray([3,2,1]));