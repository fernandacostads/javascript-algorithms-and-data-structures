/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.

Tests
Waiting:addTogether(2, 3) should return 5.
Waiting:addTogether(23, 30) should return 53.
Waiting:addTogether(5)(7) should return 12.
Waiting:addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") should return undefined.
Waiting:addTogether(2, "3") should return undefined.
Waiting:addTogether(2)([3]) should return undefined.
Waiting:addTogether("2", 3) should return undefined.
*/

function addTogether() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}

// solution 2
function addTogether() {
  const [first, second] = arguments;
  // First argument is not a number
  if (typeof(first) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is not defined
  else if (second === undefined) {
    function addSecond(second) {
      // New argument is not a number
      if (typeof(second) !== "number") {
        return undefined;
      }
      // New argument is a number
      else {
        return first + second;
      }
    }
    // Note: returning a *function*
    return addSecond;
  }
  // First argument is a number
  //  and second argument is not a number
  else if (typeof(second) !== "number") {
    return undefined;
  }
  // First argument is a number
  //  and second argument is a number
  else {
    return first + second;
  }
}