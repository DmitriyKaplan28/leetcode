
var MagicDictionary = function () {
    this.patternCount = new Map();
    this.wordSet = new Set();
};

/** 
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
    this.patternCount.clear();
    this.wordSet.clear();

    for (const w of dictionary) {
        this.wordSet.add(w);
        for (let i = 0; i < w.length; i++) {
            const pattern = w.slice(0, i) + '*' + w.slice(i + 1);
            this.patternCount.set(pattern, (this.patternCount.get(pattern) || 0) + 1);
        }
    }
};

/** 
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
    for (let i = 0; i < searchWord.length; i++) {
        const pattern = searchWord.slice(0, i) + '*' + searchWord.slice(i + 1);
        const count = this.patternCount.get(pattern) || 0;
        if (count === 0) continue;

        if (!this.wordSet.has(searchWord)) return true;

        if (count > 1) return true;
    }
    return false;
};

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */