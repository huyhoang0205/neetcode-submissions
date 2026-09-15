/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        if(!root) return null;

        let left = root.left, right = root.right;

        root.left = this.invertTree(right);
        root.right = this.invertTree(left)

        return root;
    }
}
