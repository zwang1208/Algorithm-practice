/**
 * Given a binary tree, return the inorder traversal of its nodes' values.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [];
    let stack = [];
    
    while(stack.length || root) {
        if(root) {
            stack.push(root);
            root = root.left;
        } else {
            root = stack.pop();
            res.push(root.val);
            root = root.right
        }
    }
    return res;  
};