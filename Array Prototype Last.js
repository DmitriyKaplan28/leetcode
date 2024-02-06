/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    const length = this.length
    return length ? this[length - 1] : -1
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */