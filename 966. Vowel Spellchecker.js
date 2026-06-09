/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
    const exact = new Set(wordlist);

    const caseMap = new Map();
    const vowelMap = new Map();

    const devowel = (word) =>
        word.toLowerCase().replace(/[aeiou]/g, '*');

    for (const word of wordlist) {
        const lower = word.toLowerCase();

        // Keep the first occurrence only
        if (!caseMap.has(lower)) {
            caseMap.set(lower, word);
        }

        const pattern = devowel(word);
        if (!vowelMap.has(pattern)) {
            vowelMap.set(pattern, word);
        }
    }

    const result = [];

    for (const query of queries) {
        if (exact.has(query)) {
            result.push(query);
            continue;
        }

        const lower = query.toLowerCase();

        if (caseMap.has(lower)) {
            result.push(caseMap.get(lower));
            continue;
        }

        const pattern = devowel(query);

        if (vowelMap.has(pattern)) {
            result.push(vowelMap.get(pattern));
            continue;
        }

        result.push("");
    }

    return result;
};