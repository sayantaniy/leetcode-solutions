/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let map = new Map()
    let ans = 0
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1) //counting frequency of each number
    }

    for (let [num, numCount] of map) {
        if (map.has(num + 1)) {
            ans = Math.max(ans, numCount + map.get(num + 1))
        }
    }

    return ans

};