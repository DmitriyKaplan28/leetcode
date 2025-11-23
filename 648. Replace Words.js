/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  class TrieNode {
    constructor() {
      this.children = {};
      this.isEnd = false;
    }
  }

  class Trie {
    constructor() {
      this.root = new TrieNode();
    }

    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEnd = true;
    }

    findShortestPrefix(word) {
      let node = this.root;
      let prefix = "";

      for (let char of word) {
        if (!node.children[char]) {
          return null;
        }
        node = node.children[char];
        prefix += char;

        if (node.isEnd) {
          return prefix;
        }
      }

      return null;
    }
  }

  const trie = new Trie();
  for (let root of dictionary) {
    trie.insert(root);
  }

  const words = sentence.split(" ");
  const result = words.map((word) => {
    const root = trie.findShortestPrefix(word);
    return root ? root : word;
  });

  return result.join(" ");
};

console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);
console.log(replaceWords(["a", "b", "c"], "aadsfasf absbs bbab cadsfafs"));
