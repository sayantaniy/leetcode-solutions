/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let temp = head
    let arr = []
    while (temp !== null) {
        arr.push(temp.val)
        temp = temp.next
    }

    //2 pointers
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false
        }
        left++
        right--
    }
    return true

};