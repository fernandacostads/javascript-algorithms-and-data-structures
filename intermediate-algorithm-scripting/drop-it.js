/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

Tests
Waiting:dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
Waiting:dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].
Waiting:dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].
Waiting:dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
Waiting:dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].
Waiting:dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].
*/

function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

// solution 2
function dropElements(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
});

