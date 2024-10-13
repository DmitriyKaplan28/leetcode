/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    const res = [];
    const wordMap = new Map();
    
    words.forEach((word, index) => {
        wordMap.set(word, index);
    });

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const length = word.length;

        for (let j = 0; j <= length; j++) {
            const left = word.substring(0, j);
            const right = word.substring(j);
            if (isPalindrome(left)) {
                const reversedRight = right.split('').reverse().join('');
                if (wordMap.has(reversedRight) && wordMap.get(reversedRight) !== i) {
                    res.push([wordMap.get(reversedRight), i]);
                }
            }

            if (j !== length && isPalindrome(right)) {
                const reversedLeft = left.split('').reverse().join('');
                if (wordMap.has(reversedLeft) && wordMap.get(reversedLeft) !== i) {
                    res.push([i, wordMap.get(reversedLeft)]);
                }
            }
        }
    }

    return res;
};

const isPalindrome = (word) => {
    let left = 0, right = word.length - 1;
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}