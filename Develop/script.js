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
var generatePassword = function () {

  //Prompt for user to ender a password Length
  let tempLengthOfPassword = prompt("please enter a number from 8-128");

  //Checking if input is withing range of 8 and 128
  if (num_leng >= 8 && num_leng <= 128) {
 
    //Assign user input to lengthOfPassword
    lengthOfPassword = tempLengthOfPassword;

  }
  else {
    //Catch if user inputs out of range value
    alert("your input is invalid please try again")
    writePassword();
  }

  //Llower case confirm code
  let isLowerCase = confirm("Do you want lower case ?")
  if (isLowerCase) {
    for (let i = lowCaseLow; i <= lowCaseMax; i++) {

      passwordTemp.push(i);
    }
  }
  //Upper case confirm code
  let isUppercase = confirm("Do you want upper case ?")
  if (isUppercase) {
    for (let i = upperCaseLow; i <= upperCaseMax; i++) {
  
      passwordTemp.push(i);
    
    }
  }
  //Number case confirm code
  let isNum = confirm("Do you want numbers characters ?");
  if (isNum) {
    for (let i = lowNum; i <= highNum; i++) {

      passwordTemp.push(i);
    }
  }

  //Special character confirm code
  let isSpecialCharacter = confirm("Do you want special characters ?");
  if (isSpecialCharacter) {
    for (let i = lowSpecialCharacter1; i <= highSpecialCharacter4; i++) {
      if (i >= 48 && i >= 57) {
        continue;
      }
      if (i >= 65 && i >= 122) {
        continue;
      }
      else {
  
        passwordTemp.push(i);
      }
    }
  }

  //Loop through the passwordTemp array (based of confirms)
  //Using math.random it will pick random ASCII number from passwordTemp and add it to finalPassword
  //Lastly using String.fromCharCode it will convert the number value back to its literal form
  for (let i = 0; i < index; i++) {
    var randomLength = Math.floor(Math.random() * passwordTemp.length);
  
    finalPassword += String.fromCharCode(passwordTemp[randomLength]);
  
  }
  
  document.querySelector("#password").innerHTML = finalPassword;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
