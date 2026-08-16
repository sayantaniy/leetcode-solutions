/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    //Hare algorithm
    let slow = head
    let fast = head
    //slow and fast will eventually meet on a circular track
    while (fast !==null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) return true
    }
    return false

};