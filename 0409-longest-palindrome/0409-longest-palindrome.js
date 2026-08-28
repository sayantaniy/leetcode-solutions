/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = new Map()
    let hasOdd = false
    let length = 0
    //count freq
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1)
    }
    for (let count of map.values()) {
        if (count % 2 === 0) {
            length += count
        } else {
            hasOdd = true
            length += count-1 // odd frequencies cant be added
        }
    }

    if (hasOdd === true) {
        length += 1
    }

    return length

};