// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const specStrg =  ("!\"\\#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
console.log(specStrg.length);
const specArray = specStrg.split("");
console.log(specArray);

const numStrg = ("0123456789");
const numArray = numStrg.split("");
console.log(numArray);

const alphaStrg = ("abcdefghijklmnopqrstuvwxyz");
const alphaUCStrg = alphaStrg.toUpperCase();
console.log(alphaUCStrg);
const alphaArray = alphaStrg.split("");
const alphaUCArray = alphaUCStrg.split("")
console.log(alphaArray)
console.log(alphaUCArray)
