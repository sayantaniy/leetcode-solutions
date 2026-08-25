/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function (x, y, target) {
    if (target > x + y) return false

    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b
            a = b
            b = temp
        }
        return a // when b = 0, a is the gcd
    }
    return target % gcd(x, y) === 0

};