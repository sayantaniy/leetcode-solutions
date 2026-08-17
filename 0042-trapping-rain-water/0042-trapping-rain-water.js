/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let maxLeft = 0
    let maxRight = 0
    let left = 0
    let right = height.length - 1
    let waterTrapped = 0

    while (left < right) {
        if (height[left] <= height[right]) { // left is smaller so we calculate it first
            if (height[left] > maxLeft) {
                maxLeft = height[left]
            } else { //left pointer is at an index where it is smaller than the max height so definitely some water will be trapped
                waterTrapped += maxLeft - height[left]
            }
            left++
        } else { //if right is smaller take care of the right first
            if (height[right] > maxRight) {
                maxRight = height[right]
            } else {
                waterTrapped += maxRight - height[right]
            }
            right--
        }
    }
    return waterTrapped

};