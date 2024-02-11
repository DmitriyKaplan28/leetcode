/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || classFunction === null || classFunction === undefined) {
        return false
    }

    let objPrototype = Object.getPrototypeOf(obj)

    while (objPrototype != null) {
        if (objPrototype.constructor === classFunction) {
            return true
        }
        objPrototype = Object.getPrototypeOf(objPrototype)
    }
    return false
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */