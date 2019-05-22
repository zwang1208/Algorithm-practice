/**
 * Given a binary tree, return the preorder traversal of its nodes' values.
 * 
 * root -> left -> right
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
var preorderTraversal = function(root) {
    let res = [];
    let stack = [];
    stack.push(root);
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(node) {
            res.push(node.val);
            stack.push(node.right);
            stack.push(node.left);
        }
    }
    return res;
};