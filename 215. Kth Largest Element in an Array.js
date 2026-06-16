/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    let target = nums.length - k;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const pivot = nums[left + Math.floor(Math.random() * (right - left + 1))];

        let lt = left;
        let i = left;
        let gt = right;

        while (i <= gt) {
            if (nums[i] < pivot) {
                [nums[lt], nums[i]] = [nums[i], nums[lt]];
                lt++;
                i++;
            } else if (nums[i] > pivot) {
                [nums[i], nums[gt]] = [nums[gt], nums[i]];
                gt--;
            } else {
                i++;
            }
        }

        if (target < lt) {
            right = lt - 1;
        } else if (target > gt) {
            left = gt + 1;
        } else {
            return nums[target];
        }
    }
};