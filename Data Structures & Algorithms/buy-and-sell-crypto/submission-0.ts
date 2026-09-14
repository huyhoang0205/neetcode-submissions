class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let max = 0, l=0, r=1;
        while(r < prices.length) {
            let profit = prices[r] - prices[l];
            if(profit <= 0) {
                l = r;
                r = l + 1;
                continue;
            }
            if(profit > max) {
                max = profit;
                r++;
                continue;
            }
            r++
        }
        return max;
    }
}
