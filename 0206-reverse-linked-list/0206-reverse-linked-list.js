/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null
    let curr = head
    let next
    while(curr!==null){
    next = curr.next // saving the next
    curr.next = prev // flipping the arrow

    //move both
    prev = curr
    curr = next 
    }

    //last node initially becomes first
    return prev
};