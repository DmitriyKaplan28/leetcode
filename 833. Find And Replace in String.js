/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
    let replacements = [];

    for (let i = 0; i < indices.length; i++) {
        let idx = indices[i];
        let source = sources[i];

        if (s.substring(idx, idx + source.length) === source) {
            replacements.push([idx, source, targets[i]]);
        }
    }

    replacements.sort((a, b) => a[0] - b[0]);

    let result = "";
    let pointer = 0;

    for (let [idx, source, target] of replacements) {
        result += s.substring(pointer, idx);
        result += target;
        pointer = idx + source.length;
    }

    result += s.substring(pointer);

    return result;
};