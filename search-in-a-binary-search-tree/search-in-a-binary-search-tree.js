/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    if(!root) return null;
    let cur = root;
    
    while(cur){
        if(val > cur.val){
            cur = cur.right;
        } else if(val < cur.val){
            cur = cur.left;
        } else {
            return cur;
        }
    }
    return null;
};