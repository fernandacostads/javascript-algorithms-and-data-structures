/*
  If you have many options to choose from, a switch statement can be easier to write than many chained if/else if statements. The following:

  if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }
  can be replaced with:

  switch(val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }
  Change the chained if/else if statements into a switch statement.

  You should not use any else statements anywhere in the editor

  You should not use any if statements anywhere in the editor

  You should have at least four break statements

  chainToSwitch("bob") should be the string Marley

  chainToSwitch(42) should be the string The Answer

  chainToSwitch(1) should be the string There is no #1

  chainToSwitch(99) should be the string Missed me by this much!

  chainToSwitch(7) should be the string Ate Nine

  chainToSwitch("John") should be "" (empty string)

  chainToSwitch(156) should be "" (empty string)

  */
  function chainToSwitch(val) {
    let answer = "";
  
    switch (val) {
      case "bob":
        answer = "Marley";
        break;
      case 42:
        answer = "The Answer";
        break;
      case 1: 
        answer = "There is no #1";
        break;
      case 99:
        answer = "Missed me by this much!";
        break;
      case 7:
        answer = "Ate Nine";
        break;
      default:
        answer = "";
    }
  
    return answer;
  }
  
  chainToSwitch(7);