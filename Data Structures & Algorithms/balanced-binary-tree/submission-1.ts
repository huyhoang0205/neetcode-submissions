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

    //recursive
    // dfs(root: TreeNode | null, mdiff : number[]): number {
    //     if(!root) return 0;
    //     const left = this.dfs(root.left, mdiff);
    //     const right = this.dfs(root.right, mdiff);
    //     mdiff[0] = Math.max(mdiff[0], Math.abs(left - right));
    //     return 1 + Math.max(left, right);
    // }

    // isBalanced(root: TreeNode | null): boolean {
    //     if (!root) return true;
    //     const mdiff = [0];
    //     this.dfs(root,mdiff);
    //     return mdiff[0] > 1 ? false : true;
    // }

    isBalanced(root: TreeNode | null): boolean {
        if(!root) return true;
        const stack = [root];
        const map = new Map();
        map.set(null, 0)
        while(stack.length > 0) {
            const node = stack[stack.length - 1];
            const left = node.left;
            const right = node.right;

            if(left && !map.has(left)) {
                stack.push(left);
            } else if (right && !map.has(right)) {
                stack.push(right);
            } else {
                const cur = stack.pop();
                const highLeft = map.get(cur.left);
                const highRight = map.get(cur.right);

                if (Math.abs(highLeft - highRight) > 1) return false;
                map.set(cur, 1 + Math.max(highLeft, highRight));
            }
        }
        return true;
    }
}
