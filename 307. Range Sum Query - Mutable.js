/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.n = nums.length;
    this.tree = new Array(this.n * 4).fill(0);
    this.nums = nums.slice();

    const build = (node, l, r) => {
        if (l === r) {
            this.tree[node] = nums[l];
            return;
        }
        const m = (l + r) >> 1;
        build(node * 2, l, m);
        build(node * 2 + 1, m + 1, r);
        this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
    };

    const updateTree = (node, l, r, idx, val) => {
        if (l === r) {
            this.tree[node] = val;
            return;
        }
        const m = (l + r) >> 1;
        if (idx <= m) updateTree(node * 2, l, m, idx, val);
        else updateTree(node * 2 + 1, m + 1, r, idx, val);
        this.tree[node] = this.tree[node * 2] + this.tree[node * 2 + 1];
    };

    const query = (node, l, r, ql, qr) => {
        if (ql <= l && r <= qr) return this.tree[node];
        const m = (l + r) >> 1;
        let sum = 0;
        if (ql <= m) sum += query(node * 2, l, m, ql, qr);
        if (qr > m) sum += query(node * 2 + 1, m + 1, r, ql, qr);
        return sum;
    };

    this.updateTree = updateTree;
    this.query = query;

    if (this.n) build(1, 0, this.n - 1);
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function(index, val) {
    this.nums[index] = val;
    this.updateTree(1, 0, this.n - 1, index, val);
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.query(1, 0, this.n - 1, left, right);
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
