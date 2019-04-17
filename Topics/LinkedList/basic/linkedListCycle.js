/**
 * Given a linked list, determine if it has a cycle in it.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Two Pointer
 * If there is no cycle, the fast pointer will stop at the end of the linked list.
 * If there is a cycle, the fast pointer will eventually meet with the slow pointer.
 * slow pointer one step at a time while moving the fast pointer two steps at a time
 * 
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head,
        slow = head
    while(fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) {
            return true
        }
    }
    return false
    
};

/**
 * Use Set
 * Iterate linked list, put each node in set, if node already in set, it has cycle
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function(head) {
    let newSet = new Set()
    while(head) {
        if(newSet.has(head)) return true;
        newSet.add(head);
        head = head.next;
    }
    return false
}