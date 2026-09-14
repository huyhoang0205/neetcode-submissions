class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let m = Math.trunc((0 + nums.length)/2);
        let orderedInLeft: boolean;
        let targetInLeft : boolean;
        const n = nums.length -1;
        if(nums[m] === target) return m;
        if(nums[0] === target) return 0;
        if(nums[n] === target) return n;
        if(nums[m] < nums[0] && nums[m] < nums[n]) orderedInLeft = false;
        else orderedInLeft = true;
            
        if(orderedInLeft) {
            if (target > nums[0] && target < nums[m]) targetInLeft = true;
            else targetInLeft = false;
        } else {
            if (target > nums[m] && target < nums[n]) targetInLeft = false;
            else targetInLeft = true;
        }

        while (m < n && m > 0) {
            if(target === nums[m]) return m;
            if(targetInLeft) m--;
            else m++;
        }
            
        return -1;
    }
}
