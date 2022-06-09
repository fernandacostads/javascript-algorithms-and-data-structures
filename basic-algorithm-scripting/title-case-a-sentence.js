/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

titleCase("I'm a little tea pot") should return a string.

titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") should return the string Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.
*/
// using map
function titleCaseMap(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))
    .join(" ");
}

// using regex
function titleCaseRegex(str) {
  return str
    .toLowerCase()
    .replace(/(^|\s)\S/g, L => L.toUpperCase());
}

// using iterator
function titleCase(str) {
  let newTitle = str.split(' ');
  let updatedTitle = [];
  for (let i in newTitle) {
   updatedTitle[i] = newTitle[i][0].toUpperCase() +  newTitle[i].slice(1).toLowerCase();
  }
  return updatedTitle.join(" ");
}


console.log(titleCase("I'm a little tea pot"));