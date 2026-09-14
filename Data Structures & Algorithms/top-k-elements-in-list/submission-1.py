class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        mydict = defaultdict(int)
        result = []
        for i in nums:
            mydict[i] +=1
        mydict = dict(sorted(mydict.items(),key=lambda x:x[1], reverse = True))
        for i,j in mydict.items():
            if k>0: 
                result.append(i)
                k-=1
            else: break

        return result

        

        