/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    for (let char of s) {
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
            s = s.replace(char, String.fromCharCode(char.charCodeAt(0) + 32))
    }
    return s
};