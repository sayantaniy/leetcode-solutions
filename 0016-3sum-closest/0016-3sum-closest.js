/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    //sort
    nums = nums.sort((a, b) => a - b)
    let closest = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1
        let k = nums.length - 1
        if (i > 0 && nums[i] === nums[i - 1]) continue

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (Math.abs(target - sum) < Math.abs(target - closest))
                closest = sum

            if (sum < target) {
                j++
            } else if (sum > target) {
                k--
            } else {
                return sum //exact match
            }

        }
    }
    return closest

};