/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    if (p.length > s.length) {
        return [];
    }

    var result = [];
    var need = new Array(26).fill(0);
    var window = new Array(26).fill(0);
    var aCode = "a".charCodeAt(0);

    for (var i = 0; i < p.length; i++) {
        need[p.charCodeAt(i) - aCode]++;
        window[s.charCodeAt(i) - aCode]++;
    }

    var matches = 0;
    for (var j = 0; j < 26; j++) {
        if (need[j] === window[j]) {
            matches++;
        }
    }

    if (matches === 26) {
        result.push(0);
    }

    for (var right = p.length; right < s.length; right++) {
        var addIdx = s.charCodeAt(right) - aCode;
        var removeIdx = s.charCodeAt(right - p.length) - aCode;

        window[addIdx]++;
        if (window[addIdx] === need[addIdx]) {
            matches++;
        } else if (window[addIdx] === need[addIdx] + 1) {
            matches--;
        }

        window[removeIdx]--;
        if (window[removeIdx] === need[removeIdx]) {
            matches++;
        } else if (window[removeIdx] === need[removeIdx] - 1) {
            matches--;
        }

        if (matches === 26) {
            result.push(right - p.length + 1);
        }
    }

    return result;
};