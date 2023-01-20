/*
Given an array nums. We define a running sum of an array as 
runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    // variable to store the current running sum
    let runningSum = 0
    // use map() method to create new array where each element is the running sum up to that element. 
    // this function is called for each element in the input array and its return value is used to 
    //create the corresponding element in the new array
    return nums.map((num) => {
        //callback function
            // add the current element to the running sum
        runningSum += num
            // return current runningSum
        return runningSum
    })
}