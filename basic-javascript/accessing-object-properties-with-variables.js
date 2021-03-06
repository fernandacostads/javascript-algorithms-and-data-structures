/*
  Another use of bracket notation on objects is to access a property which is stored as the value of a variable. This can be very useful for iterating through an object's properties or when accessing a lookup table.

  Here is an example of using a variable to access a property:

  const dogs = {
    Fido: "Mutt",
    Hunter: "Doberman",
    Snoopie: "Beagle"
  };

  const myDog = "Hunter";
  const myBreed = dogs[myDog];
  console.log(myBreed);
  The string Doberman would be displayed in the console.

  Another way you can use this concept is when the property's name is collected dynamically during the program execution, as follows:

  const someObj = {
    propName: "John"
  };

  function propPrefix(str) {
    const s = "prop";
    return s + str;
  }

  const someProp = propPrefix("Name");
  console.log(someObj[someProp]);
  someProp would have a value of the string propName, and the string John would be displayed in the console.

  Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

  Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player.

  playerNumber should be a number

  The variable player should be a string

  The value of player should be the string Montana

  You should use bracket notation to access testObj

  You should not assign the value Montana to the variable player directly.

  You should be using the variable playerNumber in your bracket notation
  */

 // Setup
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

const playerNumber = 16; 
const player = testObj[playerNumber];  