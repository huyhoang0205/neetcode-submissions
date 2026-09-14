class Solution {
    public int longestConsecutive(int[] nums) {
        HashSet<Integer> dic = new HashSet<>();
        int longest = 0;
        for(int num : nums ){
            dic.add(num);
        }
        for (int num : nums){
            if(dic.contains(num - 1)) continue;
            int l = 1;
            while(dic.contains(num+l)){
                l++;
            } 
            if (l > longest) longest = l;
        }
        return longest;

    }
}
