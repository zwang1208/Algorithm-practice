/**
 * 
 * Remove all elements from a linked list of integers that have value val.
 * Example:
 * Input:  1->2->6->3->4->5->6, val = 6
 * Output: 1->2->3->4->5
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let prev = null,
        originHead = head;
    while(originHead!==null) {
        if(originHead.val === val){
            if(prev===null) {
                head = originHead.next
            }else {
                prev.next = originHead.next
            }
        }else {
            prev = originHead
        }
        originHead = originHead.next
    }
    return head
};