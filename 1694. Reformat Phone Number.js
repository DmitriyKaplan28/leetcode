/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function(number) {
    const clean = number.replace(/[\-\s]/gi, '')
    return getFormattedNumber(clean)
};

const getFormattedNumber = (num) => {
    if (num.length <= 3) return num;
    if (num.length == 4) return num.substring(0, 2) + '-' + num.substring(2, 4);
    return num.substring(0, 3) + '-' + getFormattedNumber(num.substring(3, num.length));
}