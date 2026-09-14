class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {

        if(s.length != t.length) return false;

        const mapS = new Map<string,number>();
        const mapT = new Map<string,number>();
        for(let i = 0; i< s.length; i++){
            //s
            if(mapS.has(s[i])) mapS.set(s[i], mapS.get(s[i]) + 1);
            else mapS.set(s[i], 1);
            //t
            if(mapT.has(t[i])) mapT.set(t[i], mapT.get(t[i]) + 1);
            else mapT.set(t[i], 1);
        }

        for(let [key,value] of mapS) {
            if(!mapT.has(key)) return false;
            if(mapT.get(key) !== value) return false;
        }

        return true;
    }
}
