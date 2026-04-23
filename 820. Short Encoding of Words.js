/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    var uniqueWords = new Set(words);
    var wordArray = Array.from(uniqueWords);

    for (var i = 0; i < wordArray.length; i++) {
        var word = wordArray[i];
        for (var j = 1; j < word.length; j++) {
            uniqueWords.delete(word.slice(j));
        }
    }

    var totalLength = 0;
    for (var w of uniqueWords) {
        totalLength += w.length + 1;
    }

    return totalLength;
};