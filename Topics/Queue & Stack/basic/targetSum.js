/**
 * You are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols + and -. For each integer, you should choose one from + and - as its new symbol.
 * Find out how many ways to assign symbols to make sum of integers equal to target S.
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let result = 0;
    dfs(nums, S, 0, 0);
    return result;
    
    function dfs(nums, S, val, pos) {
        if(pos === nums.length) {
            if(val === S) {
                result++
            }
            return;
        }
        dfs(nums, S, val+nums[pos], pos+1)
        dfs(nums, S, val-nums[pos], pos+1)
    }
};