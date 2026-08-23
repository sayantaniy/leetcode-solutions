/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let t1 = l1
    let t2 = l2
    let dummy = new ListNode(-1)
    let curr = dummy
    let carry = 0
    while (t1 !== null || t2 !== null) {

        let t1Val = t1 ? t1.val : 0
        let t2Val = t2 ? t2.val : 0
        let sum = carry + t1Val + t2Val
        let newNode = new ListNode(sum % 10)
        carry = Math.floor(sum / 10)
        curr.next = newNode
        curr = curr.next
        if (t1) t1 = t1.next
        if (t2) t2 = t2.next
    }
    if (carry !== 0) {
        let newNode = new ListNode(carry)
        curr.next = newNode
    }
    return dummy.next
};