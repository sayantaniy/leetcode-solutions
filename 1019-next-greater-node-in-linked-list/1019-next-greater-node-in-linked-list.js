/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let ans = [] //ans array
    let curr = head

    while(curr!==null){ // stopping at lenth + 1 bc 5 vs all = 0
    let found = 0
    let temp = curr.next

        while(temp!==null){
            if (temp.val>curr.val){
                found = temp.val
                break
            }
           
            temp=temp.next
        }
        ans.push(found)
        curr = curr.next
    } 
    return ans
};