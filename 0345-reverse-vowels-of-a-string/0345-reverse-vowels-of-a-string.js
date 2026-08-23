/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    s = s.split('') //automatically creates an array.. strings are immutable
    let left = 0
    let right = s.length - 1
    let vowels = "AEIOUaeiou"
    while (left < right) {
        while (left < right && !vowels.includes(s[left])) {
            left++
        }
        while (left < right && !vowels.includes(s[right])) {
            right--
        }
        let temp = s[left]
        s[left] = s[right]
        s[right] = temp
        left++
        right--
    }
    return s.join('')
};