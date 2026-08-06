/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head
    let fast = head
    if (head===null || head.next===null) return null
    for(let i=0;i<n;i++){
        fast = fast.next
    }
    // n == length of the list
    if (fast===null){
        return head.next
    }

    while(fast.next!==null){
        slow=slow.next
        fast=fast.next
    }
    slow.next = slow.next.next

    return head
};