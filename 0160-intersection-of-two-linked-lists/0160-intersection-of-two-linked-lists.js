/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    //take two pointers both pointers will traverse both lists so eventally both will traverse same length so they will definitely meet 
    let p1 = headA
    let p2 = headB
    while(p1!==p2){
        if(p1===null){ //when p1 reaches the end of the listA go to listB
            p1=headB
        }else{
            p1 = p1.next
        }
        
        if(p2===null){
            p2=headA
        }else{
            p2=p2.next
        }
        

    }
    return p1
    
};