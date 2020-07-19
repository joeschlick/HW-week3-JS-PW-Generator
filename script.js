// // Assignment Code
// var generateBtn = document.querySelector("#generate");


// Write password to the #password input

const specStrg =  "!\"\\#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const numStrg = "0123456789";
const alphaStrg = "abcdefghijklmnopqrstuvwxyz";
const alphaUCStrg = alphaStrg.toUpperCase();

//get random symbols from string
function randSpecChar () {
  return specStrg[Math.floor(Math.random()*specStrg.length)];
}
console.log(randUcLetters())
//get random numbers from string
function randNum () {
  return numStrg[Math.floor(Math.random()*numStrg.length)];
}

//get random lc letters from string
function randLcLetters () {
  return alphaStrg[Math.floor(Math.random()*alphaStrg.length)];
}

function randUcLetters () {
  return alphaUCStrg[Math.floor(Math.random()*alphaUCStrg.length)];
}






// const strLength = prompt("Enter desired number of characters.");
// const pwLcase = confirm("Include lowercase letters?");
// const pwUcase = confirm("Include uppercase letters?");
// const pwNum = confirm("include numbers?");
// const pwSym = confirm("Include special characters?");





function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
  




