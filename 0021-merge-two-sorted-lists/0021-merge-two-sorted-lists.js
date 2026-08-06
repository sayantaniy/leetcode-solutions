/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0) //creates a new node with val =0 and address to the next node is 0, points to null
    let current = dummy
    //both points to the same node

    while(list1!==null && list2!==null){
        if (list1.val<=list2.val){
            current.next=list1 //adress of list1 is stored at current
            list1=list1.next //list1 now points to the next node
        }else{
            current.next = list2
            list2 =list2.next
        }
        current = current.next //current now points to the next node
    }

        if (list1!==null){
            current.next=list1
        }else{
            current.next=list2
        }
    return dummy.next
    
};