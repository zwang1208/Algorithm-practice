/**
 * Given a singly linked list, determine if it is a palindrome.
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head,
        slow = head;
    while(fast&&fast.next) {        
        slow = slow.next;
        fast = fast.next.next;
    }
    if(fast) {                      
        slow = slow.next;
    }
    let prev = null;
    while(slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }
    fast = head;
    while(prev) {
        if(prev.val !== fast.val) {
            return false
        }
        prev = prev.next;
        fast = fast.next
    }
    return true
};