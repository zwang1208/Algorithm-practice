/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
 * 
   0,1,0,2,1,0,1,3,2,1,2,1

                 *
         *       * *   *
     *   * *   * * * * * *
   0 1 2 3 4 5 6 7 8 9 0 1
 */

 /**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let res = 0;
    
    while(leftPointer < rightPointer) {
        if(height[leftPointer] <= height[rightPointer]) {
            leftMax = Math.max(leftMax, height[leftPointer]);
            res += leftMax - height[leftPointer];
            leftPointer++;
        }else {
            rightMax = Math.max(rightMax, height[rightPointer]);
            res += rightMax - height[rightPointer];
            rightPointer--;
        }
    }
    return res;
};