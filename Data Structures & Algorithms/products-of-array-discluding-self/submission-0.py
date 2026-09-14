class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        mylist = [1] * len(nums)
        prefix = 1
        stuffix = 1
        for i,j in enumerate(nums):
            mylist[i] *= prefix
            prefix *= j
        for i in range(len(nums)-1,-1,-1):
            mylist[i] *= stuffix
            stuffix *= nums[i]
        return mylist
        