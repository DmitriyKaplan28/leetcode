var WordDictionary = function () {
  this.root = {};
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node[char]) {
      node[char] = {};
    }
    node = node[char];
  }
  node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dfs(word, 0, this.root);
};

WordDictionary.prototype.dfs = function (word, index, node) {
  if (index === word.length) {
    return node.isEnd === true;
  }

  const char = word[index];

  if (char === ".") {
    for (let key in node) {
      if (key !== "isEnd" && this.dfs(word, index + 1, node[key])) {
        return true;
      }
    }
    return false;
  }

  if (!node[char]) {
    return false;
  }

  return this.dfs(word, index + 1, node[char]);
};
