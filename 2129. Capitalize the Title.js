/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    const arr = title.split(' ')
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < 3) res.push (arr[i].toLowerCase())
        else res.push(arr[i].charAt(0).toUpperCase() + arr[i].toLowerCase().slice(1) )
    }
    return res.join(' ')
};