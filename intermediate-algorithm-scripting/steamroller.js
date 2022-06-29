/*
Flatten a nested array. You must account for varying levels of nesting.

Tests
Waiting:steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
Waiting:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Waiting:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
Waiting:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
Waiting:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};

// test here
steamrollArray([1, [2], [3, [[4]]]]);

// Code Explanation
// Create a new variable to keep flattened arrays.
// Loop over the elements of the array
// If the element is an array then call the function again with to flatten the subarray and push the contents of the flattened subarray into the flattened array.
// If the element is not an array, then push that non-array element to the flattened array.
// Return the flattened array.

// solution 2
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]);

// Code Explanation
// Use spread operator to concatenate each element of arr with an empty array
// Use Array.some() method to find out if the new array contains an array still
// If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
// If it does not, return the flattened array

