class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        diff = {}
        for i in range(len(nums)):
            offset = target - nums[i]
            if nums[i] in diff.keys() and len(diff) > 0: return sorted([i,diff[nums[i]]])
            diff[offset] = i
        return []