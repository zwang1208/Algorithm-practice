/**
 * Given a binary tree, return the postorder traversal of its nodes' values.
 * left -> right -> root
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
var postorderTraversal = function(root) {
    let res = [];
    let stack = [];
    
    stack.push(root)
    
    while(stack.length > 0) {
        let node = stack.pop();
        if(node){
            res.unshift(node.val);
            stack.push(node.left);
            stack.push(node.right);
        }
    }
    return res;
};