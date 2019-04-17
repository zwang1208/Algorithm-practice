/**
 * Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
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
var detectCycle = function(head) {
    let fast = head,
        slow = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) {
            while(head!=fast){         //after meet, move one point to head and one step for both
                head = head.next
                fast = fast.next
            }
            return head
        }
    }
    return null
};
