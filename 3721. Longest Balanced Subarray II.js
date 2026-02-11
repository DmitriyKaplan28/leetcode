/**
 * @param {number[]} nums
 * @return {number}
 */
var longestBalanced = function (nums) {
    const n = nums.length;
    if (n === 0) return 0;

    const minv = new Int32Array(4 * n);
    const maxv = new Int32Array(4 * n);
    const lazy = new Int32Array(4 * n);

    function apply(node, delta) {
        minv[node] += delta;
        maxv[node] += delta;
        lazy[node] += delta;
    }

    function push(node) {
        const d = lazy[node];
        if (d !== 0) {
            apply(node << 1, d);
            apply((node << 1) | 1, d);
            lazy[node] = 0;
        }
    }

    function rangeAdd(node, l, r, ql, qr, delta) {
        if (ql > r || qr < l) return;
        if (ql <= l && r <= qr) {
            apply(node, delta);
            return;
        }
        push(node);
        const mid = (l + r) >> 1;
        rangeAdd(node << 1, l, mid, ql, qr, delta);
        rangeAdd((node << 1) | 1, mid + 1, r, ql, qr, delta);
        minv[node] = Math.min(minv[node << 1], minv[(node << 1) | 1]);
        maxv[node] = Math.max(maxv[node << 1], maxv[(node << 1) | 1]);
    }

    function firstZero(node, l, r, ql, qr) {
        if (ql > r || qr < l) return -1;
        if (minv[node] > 0 || maxv[node] < 0) return -1;
        if (l === r) return l;
        push(node);
        const mid = (l + r) >> 1;
        const left = firstZero(node << 1, l, mid, ql, qr);
        if (left !== -1) return left;
        return firstZero((node << 1) | 1, mid + 1, r, ql, qr);
    }

    const prev = new Map();
    let best = 0;

    for (let r = 0; r < n; r++) {
        const x = nums[r];
        const p = prev.has(x) ? prev.get(x) : -1;
        const delta = (x & 1) === 0 ? 1 : -1;

        rangeAdd(1, 0, n - 1, p + 1, r, delta);
        prev.set(x, r);

        const l = firstZero(1, 0, n - 1, 0, r);
        if (l !== -1) best = Math.max(best, r - l + 1);
    }

    return best;
};

