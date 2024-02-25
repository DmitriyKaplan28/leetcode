/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let result = {}
    for (let el of this) {
        let key = fn(el)
        if (!result[key]) result[key] = []
        result[key].push(el)
    }
    return result
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */