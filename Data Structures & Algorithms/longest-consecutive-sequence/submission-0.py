class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        dic = {}
        bgnumbers = []
        longest = 0
        #convert to dict
        for num in nums:
            dic[num] = 1
        #find the begin number
        for num in nums:
            if not dic.get(num-1): bgnumbers.append(num)
        for bg in bgnumbers:
            l = 1
            temp = bg
            while dic.get(temp+1):
                print(temp)
                l+=1
                temp+=1
            if l > longest: longest = l
        return longest
        
                
        