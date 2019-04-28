/**
 * Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
 */

let returnKthToLast = (head, k) => {    //two pointer
    if(!head) {
        throw new Error('invalid list');
    }
    let p1 = head,
        p2 = head;

    for(let i = 0; i < k; i++) {
        p1 = p1.next;
        if(!p1) {
            throw new Error('list is not long enough');
        }
    }

    while(p1.next) {
        p1 = p1.next;
        p2 = p2.next;
    }

    return p2.val;
}