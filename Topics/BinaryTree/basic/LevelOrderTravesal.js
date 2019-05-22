/**
 * Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let res = [];
        
    while(queue.length > 0) {
        let temp = [];
        let len = queue.length;
        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            temp.push(node.val)
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right)
            }
        } 
        res.push(temp)
    }
    return res;
};