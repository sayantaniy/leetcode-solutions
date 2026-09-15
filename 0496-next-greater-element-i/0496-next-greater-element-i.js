/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let output = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                let found = false
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums1[i] < nums2[k]) {
                        output.push(nums2[k])
                        found = true
                        break
                    }
                }
                if (!found)
                    output.push(-1)
            }
        }
    }
    return output

};