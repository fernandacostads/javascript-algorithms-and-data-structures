/* 

  In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

  Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

  Add the number to the end of the array, then remove the first element of the array.

  The nextInLine function should then return the element that was removed.

  nextInLine([], 5) should return a number.

  nextInLine([], 1) should return 1

  nextInLine([2], 1) should return 2

  nextInLine([5,6,7,8,9], 1) should return 5

  After nextInLine(testArr, 10), testArr[4] should be 10

*/

function nextInLine(arr, item) {

  arr.push(item);
  const itemRemoved = arr.shift(item);
  return itemRemoved;
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


