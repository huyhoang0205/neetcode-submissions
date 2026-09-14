class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const res = {}
        const newNums = nums.sort( (a,b)=> a-b)
        for(let i = 0 ; i< newNums.length ; i++){
            let j = i + 1, k = newNums.length -1
            let target = -newNums[i]  
            while (j < k){
                let offset = newNums[j] + newNums[k]
                if (offset > target) k--
                else if(offset < target) j++
                else {
                    res[[newNums[i],newNums[j],newNums[k]]] = 1
                    k--
                    j++
                }
            }
        }
        return Object.keys(res).map(val => val.split(",")).map(val => {
            const [i,j,k] = val
            return [i - '0',j - '0',k - '0']
        })
    }
}
