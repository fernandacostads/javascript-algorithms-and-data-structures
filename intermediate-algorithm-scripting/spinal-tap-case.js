/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Tests
Passed:spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
Passed:spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
Passed:spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
Passed:spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
Passed:spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

spinalCase("This Is Spinal Tap");