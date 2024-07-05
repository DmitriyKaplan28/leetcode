/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = module.exports = function(widths, s) {
    let lineWidth = 0 
    let lines = 1
    
    for (letter of s){
        const letterWidth = widths[letter.charCodeAt(0)-97]
        lineWidth += letterWidth
        if (lineWidth > 100){
            lineWidth = letterWidth
            lines += 1
        }  
    }
    
    return [lines, lineWidth]
};