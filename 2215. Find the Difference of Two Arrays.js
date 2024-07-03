/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    return [
        [...set1].filter(s => !set2.has(s)),
        [...set2].filter(s => !set1.has(s)),
    ]
};