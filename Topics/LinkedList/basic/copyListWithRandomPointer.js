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
    
    let cloneHead = new Node(head.val, null, null);     //clone original head
    let newHead = cloneHead;    //create iterators
    let oldHead = head;
    let hash = new Map();       // create map structure
    
    hash.set(oldHead, newHead)  //key: old, value: new
    
    while(oldHead.next) {   //create each node, set in map
        newHead.next = new Node(oldHead.next.val, null, null);
        oldHead = oldHead.next;
        newHead = newHead.next;
        hash.set(oldHead, newHead)
    }
    
    oldHead = head;
    newHead = cloneHead;
    
    while(oldHead && newHead) {     //traverse both
        newHead.random = oldHead.random ? hash.get(oldHead.random) : null;  //connect random
        oldHead = oldHead.next;
        newHead = newHead.next;
    }
    return cloneHead
    
};