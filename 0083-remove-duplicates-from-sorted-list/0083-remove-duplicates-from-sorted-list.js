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
var deleteDuplicates = function(head) {
    //convert into arr //brute force
    let arr = []
    let temp = head

    while(temp!==null){
        arr.push(temp.val)
        temp = temp.next
    }

    let result = []

    for (let i=0;i<arr.length;i++){
        let dup = false
        for(let j=0;j<result.length;j++){
            if (arr[i]===result[j]){
                dup = true
                break
            }
            
        }
        if (dup===false){
            result.push(arr[i])
        }

    }
    let dummy = new ListNode(0)
    let curr = dummy
    for (let i=0;i<result.length;i++){
        curr.next = new ListNode(result[i])
        curr = curr.next
    }
    return dummy.next
};