/*
You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

Tests
Waiting:new_s should equal [23, 65, 5].
Waiting:Your code should not use the filter method.
*/

// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(function (x) {
    if (callback(x) === true) {
      newArray.push(x);
    }
  });
  // Only change code above this line
  return newArray;
};

const new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// with normal for
let s2 = [23,65,98,5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  return newArray;
};

var new_s2 = s.myFilter(function(item) {
  return item % 2 === 1;
});