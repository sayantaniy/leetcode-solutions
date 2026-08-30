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
var rotateRight = function(head, k) {
    let length = 1
    let tail = head
    if(head===null ||head.next===null) return head
    while(tail.next!==null){
        length++
        tail=tail.next
    }
    k=k%length 
    tail.next=head //made circular linked list
    stepsNewTail = length-k-1 // 0 indexing
    newTail = head

    for(let i=0;i<stepsNewTail;i++){
        newTail=newTail.next
    }
    let newHead = newTail.next 
    newTail.next=null

    return newHead
    
};