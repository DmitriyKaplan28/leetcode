/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.characters = characters;
  this.combinationLength = combinationLength;
  this.indices = Array.from({ length: combinationLength }, (_, index) => index);
  this.available = combinationLength <= characters.length;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  var combination = this.indices
    .map((index) => this.characters[index])
    .join("");

  var index = this.combinationLength - 1;
  while (
    index >= 0 &&
    this.indices[index] ===
      this.characters.length - this.combinationLength + index
  ) {
    index--;
  }

  if (index < 0) {
    this.available = false;
  } else {
    this.indices[index]++;
    for (
      var nextIndex = index + 1;
      nextIndex < this.combinationLength;
      nextIndex++
    ) {
      this.indices[nextIndex] = this.indices[nextIndex - 1] + 1;
    }
  }

  return combination;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.available;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
