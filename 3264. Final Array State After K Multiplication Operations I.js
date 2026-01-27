/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function (nums, k, multiplier) {
    const cmp = (a, b) => {
        if (a.val !== b.val) return a.val - b.val;
        return a.idx - b.idx;
    };

    const heap = [];

    const siftUp = (i) => {
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (cmp(heap[i], heap[p]) >= 0) break;
            [heap[i], heap[p]] = [heap[p], heap[i]];
            i = p;
        }
    };

    const siftDown = (i) => {
        const n = heap.length;
        while (true) {
            let best = i;
            const l = i * 2 + 1;
            const r = l + 1;
            if (l < n && cmp(heap[l], heap[best]) < 0) best = l;
            if (r < n && cmp(heap[r], heap[best]) < 0) best = r;
            if (best === i) break;
            [heap[i], heap[best]] = [heap[best], heap[i]];
            i = best;
        }
    };

    const heapPush = (node) => {
        heap.push(node);
        siftUp(heap.length - 1);
    };

    const heapPop = () => {
        if (heap.length === 0) return undefined;
        const top = heap[0];
        const last = heap.pop();
        if (heap.length > 0) {
            heap[0] = last;
            siftDown(0);
        }
        return top;
    };

    for (let i = 0; i < nums.length; i++) {
        heapPush({ val: nums[i], idx: i });
    }

    for (let op = 0; op < k; op++) {
        const cur = heapPop();
        const nextVal = cur.val * multiplier;
        nums[cur.idx] = nextVal;
        heapPush({ val: nextVal, idx: cur.idx });
    }

    return nums;
};

console.log(getFinalState([2, 1, 3, 5, 6], 5, 2));
console.log(getFinalState([1, 2], 3, 4));