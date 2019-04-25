/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
 * Return a deep copy of the list.
 */
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return head;
    
    let cloneHead = new Node(head.val, null, null);
    let newHead = cloneHead;
    let oldHead = head;
    let hash = new Map();
    
    hash.set(oldHead, newHead)
    
    while(oldHead.next) {
        newHead.next = new Node(oldHead.next.val, null, null);
        oldHead = oldHead.next;
        newHead = newHead.next;
        hash.set(oldHead, newHead)
    }
    
    oldHead = head;
    newHead = cloneHead;
    
    while(oldHead && newHead) {
        newHead.random = oldHead.random ? hash.get(oldHead.random) : null;
        oldHead = oldHead.next;
        newHead = newHead.next;
    }
    return cloneHead
    
};