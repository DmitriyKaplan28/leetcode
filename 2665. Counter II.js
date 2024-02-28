/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    if (!(this instanceof createCounter)) {
        return new createCounter(init);
    }
    this.value = init
    this.initial = init
    createCounter.prototype.increment = function () {
        this.value++
        return this.value
    }
    createCounter.prototype.decrement = function () {
        this.value--
        return this.value
    }
    createCounter.prototype.reset = function () {
        this.value = this.initial
        return this.value
    }
};