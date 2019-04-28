/**
 * Write code to remove duplicates from an unsorted linked list.
 * 
 * How would you solve this problem if a temporary buffer is not allowed?
 */

let removeDups = (head) => {
    if(!head) {
        return head
    }
    let exist = new Set(),
        node = head;

    exist.add(node.val);
    
    while(node.next) {
        if(exist.has(node.next.val)) {
            node.next = node.next.next;
        }else {
            exist.add(node.next.val);
            node = node.next;
        }
    }
    return head
}