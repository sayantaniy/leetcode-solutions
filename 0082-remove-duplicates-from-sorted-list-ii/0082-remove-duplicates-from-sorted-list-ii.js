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
var deleteDuplicates = function (head) {
    let dummy = new ListNode(0, head)
    let current = head
    let prev = dummy

    while (current !== null) {
        //REMOVING ALL DUPLICATES
        if (current.next !== null && current.val === current.next.val) {
            while (current.next !== null && current.val === current.next.val) {
                current = current.next
            }
            //ALL DUPLICATES OF PREV ELEM DELETED, GO TO THE NEXT ELEMENT FOR CHECKING
            prev.next = current.next
        } else {
            prev = prev.next // prev is an unique elem
        }
        current = current.next
    }
    return dummy.next

};