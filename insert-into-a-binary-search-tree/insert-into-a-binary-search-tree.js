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
var insertIntoBST = function(root, val) {
    if(!root){
        root = new TreeNode(val, left=null, right=null);
        return root;
    }
    
    let cur = root;
    
    while(cur){
        if(val < cur.val){
            if(cur.left !== null){
                cur = cur.left;
            } else {
                cur.left = new TreeNode(val, left=null, right=null)
                return root;
            }
        } else if( val > cur.val ){
            if(cur.right !== null){
                cur = cur.right;
            } else {
                cur.right = new TreeNode(val, left=null, right=null)
                return root;
            }
        }
    }
    return null;
};