/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

Tests
Waiting:sumAll([1, 4]) should return a number.
Waiting:sumAll([1, 4]) should return 10.
Waiting:sumAll([4, 1]) should return 10.
Waiting:sumAll([5, 10]) should return 45.
Waiting:sumAll([10, 5]) should return 45.
*/

function sumAll(arr) {
  let max = Math.max(arr[0], arr[1]); // to find the maximum value of two numbers.
  let min = Math.min(arr[0], arr[1]); // to find the minimum value of two numbers.
  let sumBetween = 0;
  for (let i = min; i <= max; i++) {
    sumBetween += i;
  }
  return sumBetween;
}

sumAll([1, 4]);
