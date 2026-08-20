/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    let map = new Map()
    for (let char of t) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let char of s) {
        map.set(char, (map.get(char)) - 1)
    }
    // space = O(n) bc map can contain at most 26 eng lowercase
    for (let [key, value] of map) {
        if (value === 1) return key
    }


};