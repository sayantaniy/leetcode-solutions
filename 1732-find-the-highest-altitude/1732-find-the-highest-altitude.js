/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let netGain = 0
    let highest = 0 //because it starts from 0
    for (let n of gain) {
        netGain = netGain + n
        highest = Math.max(netGain, highest)
    }

    return highest

};