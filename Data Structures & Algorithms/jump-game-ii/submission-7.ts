class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums: number[]): number {
        if(nums.length <= 1) return 0;
        let l=0, r= nums[0], count =1, max = nums[0];
        while(l <= r){
            if(r >= nums.length -1) return count;
            if(l + nums[l] > max) max = l + nums[l];
            if(l == r) {
                r = max;
                count++;
            }
            l++;
        }

        return count;
    }
}
