/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function (nums, k) {
    let map = new Map() // values->freq
    let count = 0
    for (let n of nums) {
        //here n - k , n + k = prev, 
        //it can only be a pair if there exists a prev whose |n - prev| gives k

        if (map.has(n - k)) {
            count = count + map.get(n - k)

        }
        if (map.has(n + k)) {
            count = count + map.get(n + k)
        }
        map.set(n, (map.get(n) || 0) + 1)

    }
    return count

};