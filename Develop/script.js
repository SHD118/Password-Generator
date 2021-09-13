// Assignment Code
var generateBtn = document.querySelector("#generate");
//Create Ascii Highs and Lows
//UpperCase
upperCaseMax = 90;
upperCaseLow = 65;
//LowerCase
lowCaseMax = 122;
lowCaseLow = 97;
//Num
lowNum = 48;
highNum = 57;
//Special Character
lowSpecialCharacter = 34;
highSpecialCharacter = 126;

//Array to add from confirmations
passwordTemp = [];

//Variables
var lengthOfPassword = 0;
var finalPassword = "";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
