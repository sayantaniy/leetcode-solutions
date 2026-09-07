/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function (nums) {
    let maxPrime = 0

    function checkPrime(num) {
        if (num < 2) return false
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false
            }
        }
        return true
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i === j || i + j === nums.length - 1) {
                if (checkPrime(nums[i][j])) {
                    maxPrime = Math.max(maxPrime, nums[i][j])
                }
            }
        }
    }

    return maxPrime

};