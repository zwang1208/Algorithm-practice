/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes. 
 * Please note here we are talking about the node number and not the value in the nodes.
 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
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
var oddEvenList = function(head) {
    if(!head) {
        return head
    }
    let odd = head,
        even = head.next,
        evenHead = even;
    
    while(even && even.next) {      //seperate odd and even linked list, then connect them
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head
};