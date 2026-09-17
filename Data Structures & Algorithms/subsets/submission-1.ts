class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const stack : number[][] = [[]];
        for (const num of nums) {
            const len = stack.length;
            if(len === 0) {
                stack.push([num]);
            } else {
                for(let i=0; i< len; i++) {
                    const cur = stack[i];
                    stack.push([...stack[i],num]);
                }
            }
        }

        return stack;
    }
}
