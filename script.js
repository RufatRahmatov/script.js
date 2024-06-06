// Given an array of integers nums containing n
// + 1 integers where each integer is in the range [1,
// n] inclusive.

// There is only one repeated number in nums, return this repeated number.

// You must solve the problem without modifying the array nums and uses only constant extra space.
// Example 1:

// Input: nums = [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: nums = [3,1,3,4,2]
// Output: 3
// Example 3:

// Input: nums = [3,3,3,3,3]
// Output: 3

// @param {number[]} nums
// @return {number}

// let findDuplicate = funtion (){
//  let slow =0;
//  let fast =0;
//  while(true){

//  }
// }
// const findDuplicate(nums):
// seen = set 

// for num in nums:
// if num seen:
// return num

// seen.add(num)


//   def findDuplicate(nums):

// //   dovorun askar edilmesi(Floyd tortose and hare algoritmasi)
//   slow = nums[0]
//   fast =nums[0]

//   while True:
//   slow = nums [slow]
//   fast = nums [nums[fast]]
//   if slow == fast:
//   break


//   slow =nums[0]
//   while slow != fast:
//   slow = nums [slow]
//   fast = nums [nums[fast]]
 
//   print(f"Input: [1, 3, 4, 2, 2]\nOutput: {findDuplicate([1, 3, 4, 2, 2])}\n")

const mySet = new Set([1,3,4,2,2]);
const mySet2 = new Set([3,1,3,4,2]);
const mySet3 = new Set([3,3,3,3,3]);

console.log ([...mySet,...mySet2,...mySet3])

const numbers = [1,3,4,2,2,3,1,3,4,2,3,3,3,3,3]

console.log ([...new Set (numbers)]);