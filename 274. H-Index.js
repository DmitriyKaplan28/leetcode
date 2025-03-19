/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    
    let h = 0;
    while (h < citations.length && citations[h] > h) {
        h++;
    }
    
    return h;
};

console.log(hIndex([3,0,6,1,5]));
console.log(hIndex([1,3,1]));