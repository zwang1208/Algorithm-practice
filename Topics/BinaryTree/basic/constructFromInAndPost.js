/**
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    
    return build(0, postorder.length - 1);
    
    function build(l, r) {
        if(l > r) {
            return null;
        }
        let cur = postorder.pop();
        let i = inorder.indexOf(cur)
        let node = new TreeNode(cur);
        node.right = build(i+1, r);
        node.left = build(l, i-1);
        return node;
    }
};