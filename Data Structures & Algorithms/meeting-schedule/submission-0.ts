/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals = intervals.sort((interval1, interval2) => 
                        interval1.start - interval2.start)
        
        for(let i=0,j=1; j < intervals.length; i++, j++) {
            if(intervals[i].end > intervals[j].start) return false;
        }

        return true;
    }
}
