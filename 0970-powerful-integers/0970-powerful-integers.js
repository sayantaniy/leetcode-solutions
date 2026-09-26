/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
    let res = new Set()
    let arr1 = [1]
    let arr2 = [1]

    if (x !== 1) {
        for (let i = 1; i <= bound; i++) {
            if (Math.pow(x, i) < bound) {
                arr1.push(Math.pow(x, i))
            }
        }
    }

    if (y !== 1) {
        for (let i = 1; i <= bound; i++) {
            if (Math.pow(y, i) < bound) {
                arr2.push(Math.pow(y, i))
            }
        }
    }
    for (let n1 of arr1) {
        for (let n2 of arr2) {
            if (n1 + n2 <= bound) {
                res.add(n1 + n2)
            }
        }
    }

    return [...res]

};