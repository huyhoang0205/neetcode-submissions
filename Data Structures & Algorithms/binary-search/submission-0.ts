class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let m = Math.trunc((0 + nums.length)/2), isAsc : boolean;

        if(nums[m] === target) return m
        else if(nums[m] > target) isAsc = false;
        else isAsc = true;


        while (m >= 0 && m < nums.length ){
            if (nums[m] == target) return m;
            if (isAsc) m++;
            else m--;
        }

        return -1
    }
}
