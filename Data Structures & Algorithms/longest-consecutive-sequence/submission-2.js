class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const dic = new Set(nums)
        let longest = 0
        for(let num of nums){
            if(dic.has(num-1)) continue
            let l = 1
            while(dic.has(num+l)){
                l++
            }
            if(l > longest) longest = l 
        }
        return longest
    }
}
