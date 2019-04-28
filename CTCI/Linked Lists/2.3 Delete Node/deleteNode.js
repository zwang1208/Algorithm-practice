/**
 * Implement an algorithm to delete a node in the middle 
 * (i.e., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node.
 */

let deleteNode = (node) => {
    if(!node || !node.next) {
        throw new Error('invalid node');
    }
    node.val = node.next.val;
    node.next = node.next.next;
}