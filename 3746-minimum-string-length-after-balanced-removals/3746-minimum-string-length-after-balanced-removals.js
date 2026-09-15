/**
 * @param {string} s
 * @return {number}
 */
var minLengthAfterRemovals = function (s) {
    let map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            map.set('a', (map.get('a') || 0) + 1)
        } else {
            map.set('b', (map.get('b') || 0) + 1)
        }
    }
    let result = Math.abs((map.get('a') || 0) - (map.get('b') || 0))
    return result
};