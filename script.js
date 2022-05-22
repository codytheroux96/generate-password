// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
 var Input= prompt("How many characters do you want in your password?")
var length = parseInt(Input)
if (isNaN(length)){
  alert("That's not a number.")
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
