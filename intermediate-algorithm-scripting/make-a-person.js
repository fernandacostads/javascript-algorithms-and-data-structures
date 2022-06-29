/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.

Tests
Waiting:No properties should be added. Object.keys(bob).length should always return 6.
Waiting:bob instanceof Person should return true.
Waiting:bob.firstName should return undefined.
Waiting:bob.lastName should return undefined.
Waiting:bob.getFirstName() should return the string Bob.
Waiting:bob.getLastName() should return the string Ross.
Waiting:bob.getFullName() should return the string Bob Ross.
Waiting:bob.getFullName() should return the string Haskell Ross after bob.setFirstName("Haskell").
Waiting:bob.getFullName() should return the string Haskell Curry after bob.setLastName("Curry").
Waiting:bob.getFullName() should return the string Haskell Curry after bob.setFullName("Haskell Curry").
Waiting:bob.getFirstName() should return the string Haskell after bob.setFullName("Haskell Curry").
Waiting:bob.getLastName() should return the string Curry after bob.setFullName("Haskell Curry").
*/

const Person = function(firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

const bob = new Person('Bob Ross');
bob.getFullName();