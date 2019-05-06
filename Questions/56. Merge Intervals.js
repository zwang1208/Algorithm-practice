/**
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) {
        return intervals;
    }
    intervals.sort((a,b) => (
        a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]
    ))
    
    let prev = intervals[0],
        res = [prev];
    
    for(let item of intervals) {
        if(item[0] <= prev[1]) {
            prev[1] = Math.max(item[1], prev[1]);
        }else {
            res.push(item);
            prev = item;
        }
    }
    return res;
};