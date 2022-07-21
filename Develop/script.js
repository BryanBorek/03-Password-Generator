// Assignment Code

var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var specialCharacters = ['~','`','!','@','#','$','%','^','&','*','(',')','-','_','+','=','{','}','[',']','|',',',':',';','"','<','>','.',',','?'];
var numericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
var password = "";
var selectedCharacters = [];
var passwordLength = 0;
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = ""; //resets password
  selectedCharacters = []; //resets selected characters
  password = generatePassword(); //calls the generatePassword function to begin
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate password to be written
function generatePassword() {
  chooseLength();
  if(passwordLength > 8 && passwordLength < 128) {
    chooseCharacters();
  }
  if(selectedCharacters.length > 0) {
    for(var i=0; i<passwordLength; i++) {
  
      password = password + selectedCharacters[Math.floor(Math.random() * selectedCharacters.length)];
  }

}
return password;
}

function chooseLength() {
  
  passwordLength = prompt("How long do you want your password to be? Choose between 8 and 128.")
  if(passwordLength === null) {
    alert("I guess you changed your mind.");
    return;
  }
  if(passwordLength === "") {
    alert("Please type a number before you click OK");
    return;
  }
  if(isNaN(passwordLength)) {
    alert("Thats not a number!");
    return;
  }
  else if(passwordLength < 8) {
    alert("A brute force cracker could determine that password in less than 4 days. Try typing a number between 8 and 128 next time.");
    console.log(passwordLength);
    return;
  }
  else if(passwordLength > 128) {
    alert("Thats a bit much. Try typing a number between 8 and 128 next time.");
    return;
  }
  else {
    alert("You chose " + passwordLength + " characters long!");
  }

}

function chooseCharacters() {
  var isUppercase = confirm("Would you like to use Uppercase Characters?");
  var isLowercase = confirm("Would you like to use Lowercase Characters?");
  var isSpecial = confirm("Would you like to use Special Characters?");
  var isNumeric = confirm("Would you like to use Numeric Characters?");

 if(isUppercase) {
    selectedCharacters = selectedCharacters.concat(uppercaseCharacters);
    alert("Your password will include Uppercase Characters");
    console.log(isUppercase);
  }
  
  if(isLowercase) {
    selectedCharacters = selectedCharacters.concat(lowercaseCharacters);
    alert("Your password will include Lowercase Characters");
    console.log(isLowercase);
  }
  
  if(isSpecial) {
    selectedCharacters = selectedCharacters.concat(specialCharacters);
    alert("Your password will include Special Characters");
    console.log(isSpecial);
  }
  
  if(isNumeric) {
    selectedCharacters = selectedCharacters.concat(numericCharacters);
    alert("Your password will include Numeric Characters");
    console.log(isNumeric);
  }

  if(isUppercase + isLowercase + isSpecial + isNumeric === 0) {
    alert("I guess you changed your mind.");
    return;
  }
  console.log(selectedCharacters);
}

generateBtn.addEventListener("click", writePassword);
