/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/gi,'')
    s = s.toLowerCase()
    s = s.trim()

    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true


};