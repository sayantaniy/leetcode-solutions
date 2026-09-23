/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let len = Math.max(word1.length, word2.length)
    let result = ""

    for (i = 0; i < len; i++) {
        result += (word1[i] || "") + (word2[i] || "")

    }

    return result
};