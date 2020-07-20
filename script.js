// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // Initial prompt on button click
  let strLength = prompt("Enter desired number of characters between 8 and 128.");
  // Makes sure a number is entered - if not, back to start
  if(isNaN(strLength)) {
    alert("Must be a number");
    return "Your Secure Password";
  }
  // Makes sure a number between 8 and 128 is entered - if not, back to start. If valid entry an alert confirms selection.
  else if (strLength < 8 || strLength > 128) {
    alert("Must be a number between 8 and 128");
    return "Your Secure Password";
  }
  else {
    alert("You selected " + strLength + " characters");
  }

  // Asks user if they want lowercase letters in the password, and confirms their selection
  let pwLcase = confirm("Include lowercase letters?");
  if (pwLcase) {
    alert("Lowercase letters added");
  } 
  else {
    alert("Lowercase letters removed");
  }
  // Asks user if they want uppercase letters in the password, and confirms their selection
  let pwUcase = confirm("Include uppercase letters?");
  if (pwUcase) {
    alert("Uppercase letters added");
  } 
  else {
    alert("Uppercase letters removed");
  }
  // Asks user if they want numbers in the password, and confirms their selection
  let pwNum = confirm("include numbers?");
  if (pwNum) {
    alert("Numbers added");
  } 
  else {
    alert("Numbers removed");
  }
  // Asks user if they want special characters in the password, and confirms their selection
  let pwSym = confirm("Include special characters?");
  if (pwSym) {
    alert("Special characters added");
  } 
  else {
    alert("Special characters removed");
  }
  //If user makes no selections - back to start
  if (pwLcase + pwUcase + pwNum + pwSym == 0) {
    alert("No selections made");
    return "Your Secure Password";
  }
  //Empty array to store user character group selections
  let selectionsArray = [];
  //If user makes selections below strings are pushed into selectionsArray
  if (pwLcase) {
    selectionsArray.push("lower");
  }

  if (pwUcase) {
    selectionsArray.push("upper");
  }

  if (pwNum) {
    selectionsArray.push("numbers");
  }

  if (pwSym) {
    selectionsArray.push("symbols");
  }
  //Empty string to store randomly generated characters
  let randPW = "";
  //For loop runs random character generator functions and creates random character strings that are the lenth of and contain only the character groups the user selected. Random character strings are stored in the randPW variable
  for (let i = 0; i < strLength; i++) {
    let selectionIndex = [Math.floor(Math.random()*selectionsArray.length)]

    if (selectionsArray[selectionIndex] == "lower") {
      randPW = randPW + randLcLetters();
    }
    else if (selectionsArray[selectionIndex] == "upper") {
      randPW = randPW + randUcLetters();
    }
    else if (selectionsArray[selectionIndex] == "numbers") {
      randPW = randPW + randNum();
    }
    else if (selectionsArray[selectionIndex] == "symbols") {
      randPW = randPW + randSpecChar();
    }
  }
  return randPW;
}
//Runs the generatePassword function and ads the generated password to the text field on the page
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Random character generator
const specStrg =  "!\"\\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numStrg = "0123456789";
const alphaStrg = "abcdefghijklmnopqrstuvwxyz";
const alphaUCStrg = alphaStrg.toUpperCase();

//Get random symbols from string
function randSpecChar() {
  return specStrg[Math.floor(Math.random()*specStrg.length)];
}

//Get random numbers from string
function randNum() {
  return numStrg[Math.floor(Math.random()*numStrg.length)];
}

//Get random lc letters from string
function randLcLetters() {
  return alphaStrg[Math.floor(Math.random()*alphaStrg.length)];
}

//Get random uc letters from string
function randUcLetters() {
  return alphaUCStrg[Math.floor(Math.random()*alphaUCStrg.length)];
}
  




