class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i=0, j = numbers.length -1;
        int[] res = {0,0};
        while(i < j){
            int tol = numbers[i] + numbers[j];
            if(tol > target) j--;
            else if(tol < target) i++;
            else{
                res[0]=i+1;
                res[1]=j+1;
                return res;
            }
        }
        return res;
    }
}
