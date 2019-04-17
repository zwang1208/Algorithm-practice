/**
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p1 = headA,
        p2 = headB;
    
    while(p1!==p2){                 //p1 = p1 eventually beacuse the path length is lenA+lenB
        p1 = p1? p1.next:headB      //They either equal at intersection or at end of each list
        p2 = p2? p2.next:headA
    }
    return p1
};