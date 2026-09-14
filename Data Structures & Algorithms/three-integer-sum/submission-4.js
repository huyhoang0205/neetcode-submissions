class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = []
        const newNums = nums.sort( (a,b)=> a-b)
        for(let i = 0 ; i< newNums.length ; i++){
            if(newNums[i] > 0) break
            if(i > 0 && newNums[i] === newNums[i - 1]) continue
            let j = i + 1, k = newNums.length -1
            let target = -newNums[i]  
            while (j < k){
                let offset = newNums[j] + newNums[k]
                if (offset > target) k--
                else if(offset < target) j++
                else {
                    res.push([newNums[i],newNums[j],newNums[k]])
                    j++
                    k--
                    while(j < k && newNums[j] === newNums[j-1]) j++
                }
            }
        }
        return res
    }
}
