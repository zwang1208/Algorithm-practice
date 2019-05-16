/**
 * Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph. 
 * Each node in the graph contains a val (int) and a list (List[Node]) of its neighbors.
 */

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    let map = {};
    return traverse(node);
    
    function traverse(node) {
        if(!node) return;
        if(!map[node.val]) {
            map[node.val] = new Node(node.val);
            map[node.val].neighbors = node.neighbors.map(neighbor => traverse(neighbor))
        }
        return map[node.val]
    }  
};