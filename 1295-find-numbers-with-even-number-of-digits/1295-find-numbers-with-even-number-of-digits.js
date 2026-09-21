/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let map = new Map()
    let count = 0
    for (let num of nums) {
        if (!map.get(num))
        map.set(num, String(num).length)
        else{
            if ((String(num).length)%2===0)
            count+=1
        }
    }
    for (let [key, val] of map) {
        if (val % 2 === 0)
            count+=1
    }

    return count
};