class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        let offset = 1;
        const dp = new Array(n+1).fill(0);
        for (let i = 1; i <= n ; i++) {
            if(i === offset * 2) {
                dp[i] = 1;
                offset = offset * 2;
            } else {
                dp[i] = 1 + dp[i - offset];
            }
        }

        return dp;
    }
}
