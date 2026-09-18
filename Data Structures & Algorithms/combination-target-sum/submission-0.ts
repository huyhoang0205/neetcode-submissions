class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    dfs(nums: number[], target: number, cur: number[], res: number[][], i:number){
        if(target === 0) {
            res.push([...cur]);
        } else if(target < 0 || i >= nums.length) {
            return;
        } else {
            cur.push(nums[i]);
            this.dfs(nums,target - nums[i], cur, res, i);
            cur.pop();
            this.dfs(nums, target, cur, res, i+1);
        }
    }

    combinationSum(nums: number[], target: number): number[][] {
        const res: number[][] = [];
        const cur: number[] = [];

        this.dfs(nums,target,cur,res,0);
        return res;
    }
}
