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
var middleNode = function(head) {
    let cnt=0
    let k = 0
    let temp = head
    let current = head
    while (temp!=null){
        temp=temp.next
        cnt = cnt+1
    }
    k = Math.floor(cnt/2)+ 1

    if (k===1){
        return head
    }

    for(let i=1;i<k && current!==null;i++){
        current = current.next
    }

    return current
};