// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  let strLength = prompt("Enter desired number of characters between 8 and 128.");
  // let pwLength = parseInt(strLength);

  // console.log(pwLength)

  if(isNaN(strLength)) {
    alert("Must be a number");
    return "Your Secure Password";
  }
  if (strLength < 8 || strLength > 128) {
    alert("Must be a number between 8 and 128");
    return "Your Secure Password";
  }
  let pwLcase = confirm("Include lowercase letters?");
  let pwUcase = confirm("Include uppercase letters?");
  let pwNum = confirm("include numbers?");
  let pwSym = confirm("Include special characters?");

  if (pwLcase + pwUcase + pwNum + pwSym == 0) {
    alert("No selections made");
    return "Your Secure Password";
  }
  
  let selectionsArray = [];

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

  let randPW = "";

console.log(strLength)
  for (let i = 0; i < strLength; i++) {
    let selectionIndex = [Math.floor(Math.random()*selectionsArray.length)]
    if (selectionsArray[selectionIndex] == "lower") {
      randPW = randPW + randLcLetters();
      console.log("randomly picked lower")
    }
    else if (selectionsArray[selectionIndex] == "upper") {
      randPW = randPW + randUcLetters();
      console.log("randomly picked upper")
    }
    else if (selectionsArray[selectionIndex] == "numbers") {
      randPW = randPW + randNum();
      console.log("randomly picked numbers")
    }
    else if (selectionsArray[selectionIndex] == "symbols") {
      randPW = randPW + randSpecChar();
      console.log("randomly picked symbols")
    }
  }
  return randPW;
  

}



// console.log(generatePassword())

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//random character generator
const specStrg =  "!\"\\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numStrg = "0123456789";
const alphaStrg = "abcdefghijklmnopqrstuvwxyz";
const alphaUCStrg = alphaStrg.toUpperCase();

//get random symbols from string
function randSpecChar () {
  return specStrg[Math.floor(Math.random()*specStrg.length)];
}

//get random numbers from string
function randNum () {
  return numStrg[Math.floor(Math.random()*numStrg.length)];
}

//get random lc letters from string
function randLcLetters () {
  return alphaStrg[Math.floor(Math.random()*alphaStrg.length)];
}

//get random uc letters from string
function randUcLetters () {
  return alphaUCStrg[Math.floor(Math.random()*alphaUCStrg.length)];
}
  




