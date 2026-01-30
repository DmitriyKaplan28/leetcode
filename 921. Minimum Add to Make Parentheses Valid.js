/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
    let needOpen = 0;
    let needClose = 0;
    for (const c of s) {
        if (c === '(') {
            needClose++;
        } else {
            if (needClose > 0) needClose--;
            else needOpen++;
        }
    }
    return needOpen + needClose;
};