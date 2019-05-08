/**
 * Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.
 * 
 * For example,
 * [2,3,4], the median is 3
 * [2,3], the median is (2 + 3) / 2 = 2.5
 * 
 * Design a data structure that supports the following two operations:
 * void addNum(int num) - Add a integer number from the data stream to the data structure.
 * double findMedian() - Return the median of all elements so far.
 */

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let low = 0;
    let high = this.arr.length - 1;
    
    while(low <= high) {
        let mid = Math.floor((high+low)/2)
        if(this.arr[mid] < num) {
            low = mid + 1
        }else {
            high = mid - 1
        }
    }
    this.arr.splice(low, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.arr.length % 2 === 0) {
        let mid = this.arr.length/2;
        return (this.arr[mid] + this.arr[mid-1])/2;
    }else {
        let mid = Math.floor(this.arr.length/2) 
        return this.arr[mid]
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */