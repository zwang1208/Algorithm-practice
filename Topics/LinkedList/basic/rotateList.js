/**
 * Given a linked list, rotate the list to the right by k places, where k is non-negative.
 * Input: 1->2->3->4->5->NULL, k = 2
 * Output: 4->5->1->2->3->NULL
 * Explanation:
 * rotate 1 steps to the right: 5->1->2->3->4->NULL
 * rotate 2 steps to the right: 4->5->1->2->3->NULL
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;

    let tail = head,
        len = 1;
    while(tail.next) {
        tail = tail.next;
        len ++
    }
    tail.next = head      //circle the list
    
    let newHeadIndex = len - k%len     //find new head index
    
    for(let i = 0; i<newHeadIndex; i++) {
        tail = tail.next
    }

    head = tail.next;
    tail.next = null;
    return head
};