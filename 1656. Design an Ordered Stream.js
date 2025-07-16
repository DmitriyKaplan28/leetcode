/**
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.stream = new Array(n);
  this.ptr = 0;
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  this.stream[idKey - 1] = value;
  const res = [];
  while (this.ptr < this.stream.length && this.stream[this.ptr]) {
    res.push(this.stream[this.ptr]);
    this.ptr++;
  }
  return res;
};
