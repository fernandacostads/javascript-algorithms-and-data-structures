/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Tests
Waiting:fearNotLetter("abce") should return the string d.
Waiting:fearNotLetter("abcdefghjklmno") should return the string i.
Waiting:fearNotLetter("stvwx") should return the string u.
Waiting:fearNotLetter("bcdf") should return the string e.
Waiting:fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
*/

function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");