/**
 * @param {string} s
 * @return {string}
 */
var reverseByType = function (s) {
    const letters = [];
    const specials = [];
    const isLetter = (c) => c >= 'a' && c <= 'z';

    for (const c of s) {
        if (isLetter(c)) letters.push(c);
        else specials.push(c);
    }
    letters.reverse();
    specials.reverse();

    let i = 0, j = 0;
    return [...s].map(c => {
        if (isLetter(c)) return letters[i++];
        return specials[j++];
    }).join('');
};