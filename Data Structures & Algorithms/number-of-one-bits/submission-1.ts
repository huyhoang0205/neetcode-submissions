class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {
        let count = 0;
        for(let i = 0; i < 32 ; i++) {
            if (n & (Math.pow(2,i))) count++;
        }

        return count;
    }
}
