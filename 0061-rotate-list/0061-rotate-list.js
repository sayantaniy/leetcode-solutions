/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || head.next === null) return head //less than one node rotation
    let dummy = new ListNode(0)
    let temp = head
    let length = 0
    while(temp!==null){
        length++
        temp = temp.next
    }
    k = k%length

    dummy.next = head

    for (let i = 0; i < k; i++) {
        let prev = dummy

        while (prev.next.next !== null) {
            prev = prev.next

        }
        let temp = prev.next
        prev.next = null
        temp.next = dummy.next
        dummy.next = temp
    }

    return dummy.next

};