class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals = intervals.sort((a,b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
        const res = [[...intervals[0]]];
        for(let i = 1; i < intervals.length; i++ ) {
            const pre = res[res.length - 1];
            if( pre[1] >=  intervals[i][0] ) {
                res.pop();
                res.push( [pre[0], Math.max(intervals[i][1], pre[1])]);
            }else {
                res.push([...intervals[i]]);
            }
        }

        return res;
    }
}
