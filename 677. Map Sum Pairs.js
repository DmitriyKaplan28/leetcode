var MapSum = function () {
  this.root = { children: {}, score: 0 };
  this.values = new Map(); 
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  const delta = val - (this.values.get(key) || 0);
  this.values.set(key, val);

  let node = this.root;
  node.score += delta;
  for (const ch of key) {
    if (!node.children[ch]) {
      node.children[ch] = { children: {}, score: 0 };
    }
    node = node.children[ch];
    node.score += delta;
  }
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let node = this.root;
  for (const ch of prefix) {
    if (!node.children[ch]) return 0;
    node = node.children[ch];
  }
  return node.score;
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
