/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    const result = [];
    
    if (s.length < 4 || s.length > 12) return result;
    
    function backtrack(dots, startIndex, currentIP) {
        if (dots === 3) {
            const lastSegment = s.slice(startIndex);
            if (isValidSegment(lastSegment)) {
                result.push(currentIP + lastSegment);
            }
            return;
        }
        
        for (let i = startIndex; i < s.length - 1; i++) {
            const segment = s.slice(startIndex, i + 1);
            if (isValidSegment(segment)) {
                backtrack(dots + 1, i + 1, currentIP + segment + '.');
            }
        }
    }
    
    function isValidSegment(segment) {
        if (segment.length === 0 || segment.length > 3) return false;
        
        if (segment.length > 1 && segment[0] === '0') return false;
        
        const num = parseInt(segment);
        return num >= 0 && num <= 255;
    }
    
    backtrack(0, 0, '');
    return result;
};

console.log(restoreIpAddresses("25525511135"));
console.log(restoreIpAddresses("0000"));
console.log(restoreIpAddresses("101023"));