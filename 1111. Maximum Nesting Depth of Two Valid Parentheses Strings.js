/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const answer = [];
    let depth = 0;
    for (const c of seq) {
        if (c === '(') {
            depth++;
            answer.push(depth % 2);
        } else {
            answer.push(depth % 2);
            depth--;
        }
    }
    return answer;
};