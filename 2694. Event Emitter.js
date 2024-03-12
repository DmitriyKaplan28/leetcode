class EventEmitter {
    constructor() {
        this.events = {}
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }

        this.events[eventName].push(callback)
        return {
            unsubscribe: () => {
                const index = this.events[eventName].findIndex(cb => cb === callback);
                if (index !== -1) {
                    this.events[eventName].splice(index, 1);
                }
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!(eventName in this.events)) return [];
        return this.events[eventName].map(f => f(...args));
    }
}