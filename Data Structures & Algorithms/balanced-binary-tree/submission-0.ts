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
     * @return {boolean}
     */
    dfs(root: TreeNode | null, mdiff : number[]): number {
        if(!root) return 0;
        const left = this.dfs(root.left, mdiff);
        const right = this.dfs(root.right, mdiff);
        mdiff[0] = Math.max(mdiff[0], Math.abs(left - right));
        return 1 + Math.max(left, right);
    }

    isBalanced(root: TreeNode | null): boolean {
        if (!root) return true;
        const mdiff = [0];
        this.dfs(root,mdiff);
        return mdiff[0] > 1 ? false : true;
    }
}
