class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const len = s.length
        if(len == 0 || len ==1) return true
        let news = s.toLowerCase().replaceAll(/[^A-Za-z0-9]/g,"")
        for(let i = 0, j= news.length-1; i <= j ; i++, j-- ){
            if(news[i] != news[j]) return false
        }
        return true
    }
}
