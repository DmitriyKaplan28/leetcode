/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagramMap = new Map();

  for (let word of strs) {
    let sortedWord = word.split("").sort().join("");

    if (!anagramMap.has(sortedWord)) {
      anagramMap.set(sortedWord, []);
    }
    anagramMap.get(sortedWord).push(word);
  }

  return Array.from(anagramMap.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
