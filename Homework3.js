// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//My variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/"];
var confirmLength = ""
var userPassword = [];
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmCharacters;


// My pop-ups
function generatePassword(){
  confirmLength = (prompt("How long will your password be? It must be between 8 - 200 characters"));
  if (confirmLength < 8 != confirmLength > 200)
  confirmLength = (prompt("Choose a number between 8 - 200 characters"));
confirmLowercase = confirm("Would you like there to be lowercases in your password?");
confirmUppercase = confirm("Would you like to have UPPERCASES in your password?");
confirmNumbers = confirm("Would you like to have numbers in your password?");
confirmCharacters = confirm("Would you like to have Characters in your password?");


// My loops/if/if else
var userChoice = [];
if (confirmLowercase) {
  userChoice = userChoice.concat(lowerCase)
}
if (confirmUppercase) {
  userChoice = userChoice.concat(upperCase)
}
if (confirmNumbers) {
  userChoice = userChoice.concat(numbers)
}
if (confirmCharacters) {
  userChoice = userChoice.concat(characters)
}
 console.log(userChoice)
// My loop
  var userPassword = ""
  for (var i = 0; i < confirmLength; i++) {
    userPassword = userPassword + userChoice[Math.floor(Math.random() * userChoice.length)];
    password = userPassword;
    }
    return userPassword;
  }   
 
//Get text in text box
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
generateBtn.addEventListener("click", writePassword);



