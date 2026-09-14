class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    ignoreSpecialSym(s: string): boolean {
        if(s[0] >= 'A' && s[0] <= 'Z') return false;
        if(s[0] >= 'a' && s[0] <= 'z') return false;
        if(s[0] >= '0' && s[0] <= '9') return false;
        return true;
    }
    isPalindrome(s: string): boolean {
        let left = 0, right = s.length - 1;
        let newStr = s.toLowerCase();
        while(left < right) {
            if(this.ignoreSpecialSym(newStr[left]) &&            this.ignoreSpecialSym(newStr[right])) {
                left++;
                right--;
                continue;
            }
            if(this.ignoreSpecialSym(newStr[left])) {
                left++;
                continue
            }
            if(this.ignoreSpecialSym(newStr[right])) {
                right--;
                continue;
            }
            if(newStr[left] !== newStr[right] ) return false
            left++;
            right--;
        }
        return true
    }
}
