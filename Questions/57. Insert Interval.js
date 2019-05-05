/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).
 * You may assume that the intervals were initially sorted according to their start times.
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if(intervals.length <= 0) {
        return [newInterval]
    }
    let res = [];
    let flag = 0;
    
    for(let item of intervals) {
        if(item[1] < newInterval[0]) {
            res.push(item);
        }else if(item[0] > newInterval[1]) {
            if(flag === 0){
                res.push(newInterval)
            }
            res.push(item);
            flag = 1;
        }else {
            newInterval[0] = Math.min(item[0], newInterval[0]);
            newInterval[1] = Math.max(item[1], newInterval[1]);
        }
    }
    if(flag === 0){
        res.push(newInterval)
    }
    return res
};