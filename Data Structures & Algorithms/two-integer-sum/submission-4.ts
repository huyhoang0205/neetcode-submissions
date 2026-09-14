class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        for(let i=0; i< nums.length ; i++) {
            const offset = target - nums[i];
            for (let j=i+1; j < nums.length; j++){
                if(nums[j] === offset) {
                    return [i,j];
                }
            }
        }

        return [];
    }
}
