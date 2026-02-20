/**
 * @param {string} s
 * @return {string}
 */
var makeLargestSpecial = function(s) {
    if (s.length <= 2) return s;
    const units = [];
    let start = 0, balance = 0;
    for (let i = 0; i < s.length; i++) {
        balance += s[i] === '1' ? 1 : -1;
        if (balance === 0) {
            const unit = s.slice(start, i + 1);
            const inner = unit.slice(1, -1);
            units.push('1' + makeLargestSpecial(inner) + '0');
            start = i + 1;
        }
    }
    units.sort((a, b) => b.localeCompare(a));
    return units.join('');
};

console.log(makeLargestSpecial("11011000"));
console.log(makeLargestSpecial("10"));