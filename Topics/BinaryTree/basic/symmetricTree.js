/**
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let res = true;
    
    if(!root) return true;  
    if(!root.right && !root.left) return true;
    
    const isSame = (a, b) => {
        if(!res) return;
        if( (!a && b) || (a && !b) ) res = false;
        if(a && b) {
            if(a.val !== b.val) {
                res = false
            } else {
                isSame(a.left, b.right);
                isSame(a.right, b.left);
            }
        }
    }
    
    isSame(root.left, root.right);
    return res;
};