/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    if (num < 10) return num
    sum = 0
    let temp = num

    while (temp > 0) {
        sum += temp % 10
        temp = Math.floor(temp / 10)
    }

    return addDigits(sum)

};