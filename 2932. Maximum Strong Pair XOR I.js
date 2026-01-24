/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    nums.sort((a, b) => a - b);
    let maxXor = 0;
    let right = -1;
    const root = { children: [null, null] };

    function insert(num) {
        let node = root;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (!node.children[bit]) {
                node.children[bit] = { children: [null, null], count: 0 };
            }
            node = node.children[bit];
            node.count++;
        }
    }

    function deleteNum(num) {
        let node = root;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (node.children[bit]) {
                node = node.children[bit];
                node.count--;
            }
        }
    }

    function query(num) {
        let node = root;
        let xor = 0;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            const preferred = 1 - bit;
            if (node.children[preferred] && node.children[preferred].count > 0) {
                xor |= (1 << i);
                node = node.children[preferred];
            } else if (node.children[bit] && node.children[bit].count > 0) {
                node = node.children[bit];
            } else {
                return 0;
            }
        }
        return xor;
    }

    for (let i = 0; i < nums.length; i++) {
        while (right + 1 < nums.length && nums[right + 1] <= 2 * nums[i]) {
            right++;
            insert(nums[right]);
        }
        if (right >= i) {
            maxXor = Math.max(maxXor, query(nums[i]));
        }
        if (i + 1 < nums.length) {
            deleteNum(nums[i]);
        }
    }
    return maxXor;
};

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));
console.log(maximumStrongPairXor([10, 100]));
console.log(maximumStrongPairXor([5,6,25,30]));