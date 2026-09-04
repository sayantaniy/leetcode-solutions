/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    //descending order
    //not all the extras too , properly
    const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    result = "" //string
    for (let i = 0; i < values.length; i++) {
        while (num >= values[i]) { //tab tk result me add karo jab tk nums symbols[i] se bara ho, aur har bar num se ghata do
            result += symbols[i]
            num -= values[i]
        }
    }
    return result
};