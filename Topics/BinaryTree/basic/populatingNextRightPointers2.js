/**
 * Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.
 */

/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root == null) return root;
      const queue = [root];
      while (queue.length > 0) {
        let n = queue.length;
        for (let i = 0; i < n; ++i) {
          const temp = queue.shift();
          if (temp.left) {
            queue.push(temp.left);
          }
          if (temp.right) {
            queue.push(temp.right);
          }
          let temp1 = new Node();
          if (i == n - 1) {
            temp1 = null;
          } else {
            temp1 = queue[0];
          }
          temp.next = temp1;
        }
      }
      return root;
};