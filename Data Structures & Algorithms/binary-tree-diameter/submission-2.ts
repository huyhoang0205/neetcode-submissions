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
     * @return {number}
     */

    // Recursion
    // maxDepth(root: TreeNode | null, res : number[]): number {
    //     if(!root) return 0;
    //     const left = this.maxDepth(root.left,res);
    //     const right = this.maxDepth(root.right,res)
    //     res[0] = Math.max(res[0], left + right)
    //     return 1 + Math.max(left, right);
    // } 

    // diameterOfBinaryTree(root: TreeNode | null): number {
    //     if(!root) return 0;
    //     const res = [0];
    //     this.maxDepth(root, res);
    //     return res[0];
    // }

    // DFS loop
    diameterOfBinaryTree(root: TreeNode | null): number {
        if(!root) return 0;
        const stack = [root];
        const map = new Map();
        let res = 0;
        map.set(null, 0);
        while(stack.length > 0) {
            const node = stack[stack.length - 1];

            if(node.left && !map.has(node.left)){
                stack.push(node.left);
            } else if(node.right && !map.has(node.right)) {
                stack.push(node.right);
            } else {
                const cur = stack.pop();

                const hLeft = map.get(cur.left);
                const hRight = map.get(cur.right);

                res = Math.max(res, hLeft + hRight);
                map.set(cur, 1 + Math.max(hLeft, hRight));
            }
        }

        return res;
        
    }
}
