/**
 * Given a linked list, remove the n-th node from the end of list and return its head.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let slow = head,
        fast = head;
    for(let i = 0; i< n; i++) {         //fast is n ahead slow
        fast = fast.next
    }
    if(!fast) {
        return head.next
    }
    while(fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next
    return head
};