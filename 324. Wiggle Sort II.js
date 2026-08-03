/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const n = nums.length;

    function quickSelect(k) {
        let l = 0, r = n - 1;
        while (l <= r) {
            let pivot = nums[r];
            let p = l;
            for (let i = l; i < r; i++) {
                if (nums[i] < pivot) {
                    [nums[i], nums[p]] = [nums[p], nums[i]];
                    p++;
                }
            }
            [nums[p], nums[r]] = [nums[r], nums[p]];
            if (p === k) return nums[p];
            if (p < k) l = p + 1;
            else r = p - 1;
        }
    }

    const median = quickSelect(Math.floor(n / 2));
    const idx = i => (1 + 2 * i) % (n | 1);

    let i = 0, j = 0, k = n - 1;

    while (j <= k) {
        if (nums[idx(j)] > median) {
            [nums[idx(i)], nums[idx(j)]] = [nums[idx(j)], nums[idx(i)]];
            i++;
            j++;
        } else if (nums[idx(j)] < median) {
            [nums[idx(j)], nums[idx(k)]] = [nums[idx(k)], nums[idx(j)]];
            k--;
        } else {
            j++;
        }
    }
};
