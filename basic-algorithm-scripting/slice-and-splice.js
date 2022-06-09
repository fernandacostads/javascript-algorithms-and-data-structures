/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].

The first array should remain the same after the function runs.

The second array should remain the same after the function runs.
*/

// function frankenSplice(arr1, arr2, n) {
//   let localArr = arr2.slice();
//   localArr.splice(n, 0, ...arr1);
//   return localArr;
// }

// function frankenSplice(arr1, arr2, n) {
//   return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
// }

function frankenSplice(arr1, arr2, n) {
  let copyArr2 = arr2.slice();
  for (let i in arr1) {
    copyArr2.splice(n, 0, arr1[i]);
    n++;
  }
  return copyArr2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));