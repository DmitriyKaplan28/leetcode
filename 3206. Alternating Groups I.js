/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    const n = colors.length;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        const left = colors[(i - 1 + n) % n];
        const middle = colors[i];
        const right = colors[(i + 1) % n];
        
        if (middle !== left && middle !== right) {
            count++;
        }
    }
    
    return count;
};
