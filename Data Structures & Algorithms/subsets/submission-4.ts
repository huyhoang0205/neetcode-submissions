class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    //use iterate;
    // subsets(nums: number[]): number[][] {
    //     const stack : number[][] = [[]];
    //     for (const num of nums) {
    //         if(stack.length === 0) {
    //             stack.push([num]);
    //         } else {
    //             const len = stack.length;
    //             for(let i=0; i< len; i++) {
    //                 const cur = stack[i];
    //                 stack.push([...stack[i],num]);
    //             }
    //         }
    //     }

    //     return stack;
    // }

    //recursion

    dfs(nums: number[], cur: number[], res:number[][], i:number) {
        if(i >= nums.length) {
            res.push([...cur]);
            return;
        }
        cur.push(nums[i]);
        this.dfs(nums,cur,res,i+1);
        cur.pop();
        this.dfs(nums,cur,res,i+1);
    }

    subsets(nums: number[]): number[][] {
        const res: number[][] = [];
        const cur: number[] = [];
        this.dfs(nums,cur,res,0);
        return res;
    }
}
