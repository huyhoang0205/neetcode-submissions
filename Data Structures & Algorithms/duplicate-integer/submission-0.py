class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        fil = set()
        for i in nums:
            if i not in fil: fil.add(i)
            else: return True
        return False