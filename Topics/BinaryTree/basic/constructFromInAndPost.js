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
    let map = inorder.reduce((acc,v,i) => {
        acc[v] = i;
        return acc;
    },{})
    
    let lastIndex = postorder.length - 1
    
    return build(0, postorder.length);
    
    function build(l, r) {
        if(l >= r) {
            return null;
        }
        let cur = postorder[lastIndex];
        lastIndex--;
        let node = new TreeNode(cur);
        node.right = build(map[cur] +1, r);
        node.left = build(l, map[cur]);
        return node;
    }
};