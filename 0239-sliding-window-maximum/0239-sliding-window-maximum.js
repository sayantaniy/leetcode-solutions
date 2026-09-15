/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    //monotonically decreasing deque
    //deque and not stack bc.. like stack we need to add and remove from the top but also remove the front when we need to slide the window
    let deque = [] //monotonic deque storing index
    let result = [] //resultant array
    let n = nums.length

    for (let r = 0; r < n; r++) {
        //add to the deque before removing smaller elements
        while (deque.length > 0 && nums[deque.at(-1)] < nums[r]) {
            deque.pop()
        }
        deque.push(r)

        //remove elements outside the window
        while (deque.length > 0 && deque[0] <= r - k) {
            deque.shift()
        }

        //once we have complete window, push results
        if (r >= k - 1) {
            result.push(nums[deque[0]])
        }
    }
    return result

};