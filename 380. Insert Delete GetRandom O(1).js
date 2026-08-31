var RandomizedSet = function () {
  this.values = [];
  this.indexMap = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.indexMap.has(val)) {
    return false;
  }

  this.indexMap.set(val, this.values.length);
  this.values.push(val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.indexMap.has(val)) {
    return false;
  }

  const index = this.indexMap.get(val);
  const last = this.values[this.values.length - 1];

  this.values[index] = last;
  this.indexMap.set(last, index);

  this.values.pop();
  this.indexMap.delete(val);

  if (this.values.length === 0) {
    this.indexMap.clear();
  }

  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIndex = Math.floor(Math.random() * this.values.length);
  return this.values[randomIndex];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
