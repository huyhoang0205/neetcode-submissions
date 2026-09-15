class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        if(s.length === 0) return 0;
        let max = 1;
        const set = new Set();
        for(let i = 0, j = 0; j < s.length; j++) {
            if(set.has(s[j])) {
                //compare vs max
                const len = set.size;
                if(len > max) max= len;
                // remove set
                while(i <= j) {
                    set.delete(s[i]);
                    i++;
                    if(s[i-1] === s[j]) break;
                }
            }
            set.add(s[j]);
            if(j == s.length - 1) {
                const len = set.size;
                if(len > max) max= len;
            }
        }
        return max;
    }
}
