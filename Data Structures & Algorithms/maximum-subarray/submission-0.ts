class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums: number[]): number {
        let cursum = nums[0], max = nums[0];
        for (let i=1; i < nums.length; i++) {
            cursum+= nums[i];
            if(cursum < nums[i]) {
                cursum = nums[i];
            }

            if( cursum > max ) {
                max = cursum;
            }
        }

        return max;
    }
}
