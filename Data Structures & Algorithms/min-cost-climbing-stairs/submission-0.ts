class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost: number[]): number {
        let x = 0; // mincost n-2
        let y = 0;  // mincost n-1

        for(let i=2 ; i <= cost.length; i++) {
            const tmp = Math.min(cost[i-1] + y , cost[i-2] + x);
            [x , y] = [y,x];
            y = tmp;
        }

        return y;
        
    }
}
