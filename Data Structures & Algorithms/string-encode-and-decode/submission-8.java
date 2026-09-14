class Solution {

    public String encode(List<String> strs) {
        String res = "";
        for(String str : strs){
            int length = str.length();
            res += length + "#" + str; 
        }
        return res;
    }

    public List<String> decode(String str) {
        if(str.length() == 0) return new ArrayList<>();
        List<String> res = new ArrayList<>();
        for(int i =0 ; i< str.length() ; i++){
            int j = i;
            while(str.charAt(j) != '#'){
                j++;
            }
            int len = Integer.parseInt(str.substring(i,j));
            i = j+1;
            j = i + len;
            res.add(str.substring(i,j));
            i = j -1;
        }
        return res;
    }
}
