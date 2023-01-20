// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.
var pivotIndex = function(nums) {
  var leftSum = 0
  var rightSum = nums.reduce((a, b) => a + b) // sum of all elements in the array
  
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i] // subtract the current element from the right sum
    if (leftSum === rightSum) {
      return i
    }
    leftSum += nums[i] // add the current element to the left sum
  }
  return -1
}

// This code iterates through the array and keeps track of the left sum and right sum. At each index, it checks if the left sum is equal to the right sum and if it is, it returns that index as the pivot index. If no pivot index is found, it returns -1.