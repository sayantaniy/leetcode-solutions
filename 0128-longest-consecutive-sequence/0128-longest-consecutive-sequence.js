/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let set = new Set(nums)
    let maxSequence = 0
    let sequence = 0

    for (let n of set) {
        if (!set.has(n - 1)) { // n is the start of the sequence
            let sequence = 1
            let current = n

            while (set.has(current + 1)) { // O(1)
                sequence = sequence + 1
                current = current + 1
            }
            maxSequence = Math.max(sequence, maxSequence)
        }
    }
    return maxSequence
};