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
    //DFS with recursion
    // maxDepth(root: TreeNode | null): number {
    //     if(!root) return 0;
    //     return 1 + Math.max(this.maxDepth(root.left),this.maxDepth(root.right));
    // }

    //DFS with iterate
    // maxDepth(root: TreeNode | null): number {
    //     if(!root) return 0;
    //     const stack :[TreeNode, number][] = [[root,1]];
    //     let res = 0;
    //     while(stack.length > 0) {
    //         const cur = stack.pop();
    //         const node = cur[0];
    //         const dep = cur[1];
    //         if(node.left) stack.push([node.left, dep +1]);
    //         if(node.right) stack.push([node.right, dep +1]);
    //         res = Math.max(res,dep);
    //     }

    //     return res;
    // }

    //BFS
    maxDepth(root: TreeNode | null): number {
        if(!root) return 0;
        const queue = [root];
        let level = 0;
        while(queue.length > 0) {
            const size = queue.length;
            for (let i = 0 ; i < size ; i++) {
                const cur = queue.shift();
                if(cur.left) queue.push(cur.left);
                if(cur.right) queue.push(cur.right);
            }
            level++;
        }

        return level;
    }
}
