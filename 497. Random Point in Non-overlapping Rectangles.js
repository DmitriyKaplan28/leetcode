/**
 * @param {number[][]} rects
 */
var Solution = function(rects) {
    this.rects = rects;
    this.prefix = [];
    let total = 0;

    for (const [a, b, x, y] of rects) {
        total += (x - a + 1) * (y - b + 1);
        this.prefix.push(total);
    }

    this.total = total;
};

/**
 * @return {number[]}
 */
Solution.prototype.pick = function() {
    let target = Math.floor(Math.random() * this.total) + 1;
    let left = 0;
    let right = this.prefix.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (this.prefix[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    const [a, b, x, y] = this.rects[left];
    const prev = left === 0 ? 0 : this.prefix[left - 1];
    const offset = target - prev;

    return [
        a + (offset - 1) % (x - a + 1),
        b + Math.floor((offset - 1) / (x - a + 1))
    ];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(rects)
 * var param_1 = obj.pick()
 */
