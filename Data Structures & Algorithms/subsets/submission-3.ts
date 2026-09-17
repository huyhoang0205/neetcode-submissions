class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums: number[]): number[][] {
        const stack : number[][] = [[]];
        for (const num of nums) {
            if(stack.length === 0) {
                stack.push([num]);
            } else {
                const len = stack.length;
                for(let i=0; i< len; i++) {
                    const cur = stack[i];
                    stack.push([...stack[i],num]);
                }
            }
        }

        return stack;
    }
}
