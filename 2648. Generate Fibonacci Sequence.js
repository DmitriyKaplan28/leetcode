/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let prev = 0
    let res = 1
    yield 0
    yield 1
    while (true) {
        let cur = res
        res = prev + res
        prev = cur
        yield res
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */