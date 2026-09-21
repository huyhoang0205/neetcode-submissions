class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        const hash = new Map<number,number>();
        while(n != 1){
            let nc = 0;
            let num = n;
            while(num != 0) {
                nc += (num % 10) ** 2;
                num = Math.trunc(num / 10);
            }
            if(hash.has(nc)) return false;
            hash.set(n,nc);
            n = nc;
        }

        return true;
    }
}
