/**
 * @param {number[]} source
 * @param {number[]} target
 * @return {number}
 */
var minQueenMoves = function(source, target) {
    const [sr, sc] = source;
    const [tr, tc] = target;

    if (sr === tr && sc === tc) return 0;

    const sameLine =
        sr === tr ||
        sc === tc ||
        Math.abs(sr - tr) === Math.abs(sc - tc);

    return sameLine ? 1 : 2;
};
