/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    
    return build(0, inorder.length - 1)
    
    function build(l, r) {
        if(l > r) return null;
        let node = preorder.shift();
        let i = inorder.indexOf(node);
        let root = new TreeNode(node);
        
        root.left = build(l, i-1);
        root.right = build(i+1, r);
        
        return root;
        
    }
};