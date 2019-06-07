/**
 * Reverse a singly linked list.
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next) {
        return head;
    }
    
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    
    return newHead;
};