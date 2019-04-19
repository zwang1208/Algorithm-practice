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
    let prev = null;
    
    while(head) {
        let temp = head.next;
        head.next = prev
        prev = head
        head = temp
    }
    return prev
};

function reverseList(head) {
    if (!head || !head.next) {
        return head;
    }
    let newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}

