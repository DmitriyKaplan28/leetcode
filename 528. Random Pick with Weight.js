/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefix = [];
    let total = 0;

    for (const weight of w) {
        total += weight;
        this.prefix.push(total);
    }

    this.total = total;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    const target = Math.floor(Math.random() * this.total) + 1;
    let left = 0;
    let right = this.prefix.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (this.prefix[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */