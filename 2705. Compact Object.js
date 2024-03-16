/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function (obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj
    }
    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject)
    }

    let res = {}
    for (const key in obj) {
        const item = compactObject(obj[key])
        Boolean(item) ? res[key] = item : ''
    }
    return res
};